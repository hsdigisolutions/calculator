<?php
/**
 * Cron-batched background creation of calculator_page entries.
 * Never creates on the activation hook (would hit PHP timeout at 475 inserts):
 * activation only seeds a queue; this processes ~50 per run and reschedules
 * until empty. Idempotent — skips slugs that already exist.
 *
 * @package Calcvora_SEO_Manager
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Calcvora_Background_Process {

	const HOOK       = 'calcvora_seed_batch';
	const BATCH_SIZE = 50;

	public static function init() {
		add_action( self::HOOK, array( __CLASS__, 'run_batch' ) );
	}

	/** Seed the queue with any slugs that do not yet have an entry, and kick off. */
	public static function seed_queue() {
		$all   = Calcvora_Slugs::all();
		$queue = array();
		foreach ( $all as $rec ) {
			if ( ! self::find_by_slug( $rec['slug'] ) ) {
				$queue[] = $rec;
			}
		}
		update_option( 'calcvora_seed_total', count( $all ), false );
		update_option( 'calcvora_seed_done', count( $all ) - count( $queue ), false );
		update_option( 'calcvora_seed_queue', $queue, false );
		delete_option( 'calcvora_seed_complete' );

		if ( ! empty( $queue ) && ! wp_next_scheduled( self::HOOK ) ) {
			wp_schedule_single_event( time() + 1, self::HOOK );
		}
	}

	public static function run_batch() {
		$queue = get_option( 'calcvora_seed_queue', array() );
		if ( empty( $queue ) || ! is_array( $queue ) ) {
			update_option( 'calcvora_seed_complete', current_time( 'mysql' ), false );
			return;
		}

		$batch     = array_splice( $queue, 0, self::BATCH_SIZE );
		$done_incr = 0;
		foreach ( $batch as $rec ) {
			if ( self::create_entry( $rec ) ) {
				$done_incr++;
			} else {
				$done_incr++; // Already exists — still counts as processed.
			}
		}

		$done = (int) get_option( 'calcvora_seed_done', 0 ) + $done_incr;
		update_option( 'calcvora_seed_done', $done, false );
		update_option( 'calcvora_seed_queue', array_values( $queue ), false );

		if ( ! empty( $queue ) ) {
			wp_schedule_single_event( time() + 5, self::HOOK );
		} else {
			update_option( 'calcvora_seed_complete', current_time( 'mysql' ), false );
		}
	}

	/** @return int|false Post ID if created, false if skipped/exists. */
	public static function create_entry( $rec ) {
		if ( self::find_by_slug( $rec['slug'] ) ) {
			return false;
		}
		$post_id = wp_insert_post(
			array(
				'post_type'   => CALCVORA_SEO_CPT,
				'post_status' => 'publish',
				'post_title'  => $rec['title'],
			),
			true
		);
		if ( is_wp_error( $post_id ) || ! $post_id ) {
			return false;
		}
		update_post_meta( $post_id, 'calc_slug', $rec['slug'] );
		update_post_meta( $post_id, 'calc_category', $rec['category'] );
		update_post_meta( $post_id, 'calc_es_path', isset( $rec['es_path'] ) ? $rec['es_path'] : '' );
		update_post_meta( $post_id, 'seo_status', 'pending' );
		// is_indexed intentionally left unset -> defaults to true (indexed).

		$term_id = Calcvora_Taxonomy::ensure_term( $rec['category'], $rec['category_name'] );
		if ( $term_id ) {
			wp_set_object_terms( $post_id, array( $term_id ), CALCVORA_SEO_TAX );
		}
		return (int) $post_id;
	}

	/** @return int|false */
	public static function find_by_slug( $slug ) {
		$posts = get_posts(
			array(
				'post_type'      => CALCVORA_SEO_CPT,
				'post_status'    => 'any',
				'posts_per_page' => 1,
				'fields'         => 'ids',
				'no_found_rows'  => true,
				'meta_query'     => array( array( 'key' => 'calc_slug', 'value' => $slug ) ),
			)
		);
		return empty( $posts ) ? false : (int) $posts[0];
	}

	/** Fill empty content fields for a post from the bundled app-content seed. */
	public static function seed_content_for( $post_id ) {
		$slug = get_post_meta( $post_id, 'calc_slug', true );
		if ( ! $slug ) {
			return false;
		}
		$map = self::seed_map();
		if ( ! isset( $map[ $slug ] ) ) {
			return false;
		}
		$data    = $map[ $slug ];
		$changed = false;

		$maybe = function ( $key, $value ) use ( $post_id, &$changed ) {
			if ( '' === (string) get_post_meta( $post_id, $key, true ) && '' !== (string) $value ) {
				update_post_meta( $post_id, $key, wp_kses_post( $value ) );
				$changed = true;
			}
		};
		$maybe( 'calc_intro', isset( $data['introEs'] ) ? $data['introEs'] : '' );
		$maybe( 'calc_explanation', isset( $data['explanationEs'] ) ? $data['explanationEs'] : '' );
		$maybe( 'calc_example', isset( $data['exampleEs'] ) ? $data['exampleEs'] : '' );

		$existing_faqs = json_decode( (string) get_post_meta( $post_id, 'calc_faqs', true ), true );
		if ( empty( $existing_faqs ) && ! empty( $data['faqs'] ) ) {
			update_post_meta( $post_id, 'calc_faqs', wp_json_encode( $data['faqs'] ) );
			$changed = true;
		}
		return $changed;
	}

	/** @return array<string,array> keyed by calc slug. */
	private static function seed_map() {
		static $map = null;
		if ( null !== $map ) {
			return $map;
		}
		$map  = array();
		$file = CALCVORA_SEO_DIR . 'data/calculators-seed.json';
		if ( file_exists( $file ) ) {
			$json = json_decode( file_get_contents( $file ), true ); // phpcs:ignore
			if ( is_array( $json ) ) {
				foreach ( $json as $row ) {
					if ( isset( $row['calcSlug'] ) ) {
						$map[ $row['calcSlug'] ] = $row;
					}
				}
			}
		}
		return $map;
	}
}
