<?php
/**
 * Content quality checks + word count, computed on save.
 *
 * @package Calcvora_SEO_Manager
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Calcvora_Quality {

	const MIN_WORDS = 300;
	const MIN_FAQS  = 3;

	public static function on_save( $post_id, $post, $update = true ) {
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}
		if ( wp_is_post_revision( $post_id ) ) {
			return;
		}
		self::recompute( $post_id );
	}

	/**
	 * Recompute word count + warnings from whatever is currently stored. Fired
	 * both on form save and when content meta is written directly (REST seeding).
	 */
	public static function on_meta_update( $meta_id, $post_id, $meta_key ) {
		if ( in_array( $meta_key, array( 'calc_explanation', 'calc_intro', 'calc_faqs' ), true )
			&& get_post_type( $post_id ) === CALCVORA_SEO_CPT ) {
			self::recompute( $post_id );
		}
	}

	public static function recompute( $post_id ) {
		$explanation = (string) get_post_meta( $post_id, 'calc_explanation', true );
		$intro       = (string) get_post_meta( $post_id, 'calc_intro', true );
		$faqs        = json_decode( (string) get_post_meta( $post_id, 'calc_faqs', true ), true );
		$faqs        = is_array( $faqs ) ? $faqs : array();

		$words = self::word_count( $explanation );
		update_post_meta( $post_id, 'content_word_count', $words );

		$warnings = array();
		if ( $words < self::MIN_WORDS ) {
			$warnings[] = sprintf(
				/* translators: 1: current words, 2: minimum */
				__( 'Explanation is %1$d words — aim for at least %2$d.', 'calcvora-seo-manager' ),
				$words,
				self::MIN_WORDS
			);
		}
		if ( count( $faqs ) < self::MIN_FAQS ) {
			$warnings[] = sprintf(
				/* translators: 1: current count, 2: minimum */
				__( 'Only %1$d FAQ(s) — add at least %2$d.', 'calcvora-seo-manager' ),
				count( $faqs ),
				self::MIN_FAQS
			);
		}
		if ( '' === trim( wp_strip_all_tags( $intro ) ) ) {
			$warnings[] = __( 'Intro paragraph is empty.', 'calcvora-seo-manager' );
		}
		if ( get_post_meta( $post_id, '_calcvora_schema_invalid', true ) ) {
			$warnings[] = __( 'Schema override is not valid JSON — it will be ignored.', 'calcvora-seo-manager' );
		}

		update_post_meta( $post_id, '_calcvora_warnings', $warnings );
	}

	public static function word_count( $html ) {
		$text = trim( wp_strip_all_tags( (string) $html ) );
		if ( '' === $text ) {
			return 0;
		}
		return count( preg_split( '/\s+/u', $text ) );
	}

	/** @return bool whether the page meets the content bar. */
	public static function passes( $post_id ) {
		$w    = (int) get_post_meta( $post_id, 'content_word_count', true );
		$faqs = json_decode( (string) get_post_meta( $post_id, 'calc_faqs', true ), true );
		return $w >= self::MIN_WORDS && is_array( $faqs ) && count( $faqs ) >= self::MIN_FAQS;
	}
}
