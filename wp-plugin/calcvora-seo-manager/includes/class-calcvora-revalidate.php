<?php
/**
 * Fires Next.js ISR revalidation when an SEO expert saves a calculator page,
 * and builds "Preview in Next.js" URLs.
 *
 * Settings (Calculator Pages -> Settings):
 *   calcvora_next_url          e.g. https://hscalculadora.com
 *   calcvora_revalidate_secret shared secret matching Next's REVALIDATE_SECRET
 *
 * @package Calcvora_SEO_Manager
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Calcvora_Revalidate {

	public static function base_url() {
		return untrailingslashit( get_option( 'calcvora_next_url', 'https://hscalculadora.com' ) );
	}

	public static function preview_url( $slug ) {
		if ( ! $slug ) {
			return '';
		}
		// Prefer the stored ES path for this entry; fall back to the /en English route.
		$es_path = '';
		$found   = Calcvora_Background_Process::find_by_slug( $slug );
		if ( $found ) {
			$es_path = (string) get_post_meta( $found, 'calc_es_path', true );
		}
		$path = $es_path ? $es_path : '/en/' . ltrim( $slug, '/' );
		return self::base_url() . $path;
	}

	public static function on_save( $post_id, $post, $update = true ) {
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}
		if ( wp_is_post_revision( $post_id ) ) {
			return;
		}
		if ( 'publish' !== $post->post_status ) {
			return;
		}

		$secret = get_option( 'calcvora_revalidate_secret', '' );
		$slug   = (string) get_post_meta( $post_id, 'calc_slug', true );
		if ( ! $secret || ! $slug ) {
			return;
		}

		$response = wp_remote_post(
			self::base_url() . '/api/revalidate',
			array(
				'timeout'  => 5,
				'blocking' => true,
				'headers'  => array(
					'Content-Type'     => 'application/json',
					'x-calcvora-secret' => $secret,
				),
				'body'     => wp_json_encode(
					array(
						'slug'   => $slug,
						'esPath' => (string) get_post_meta( $post_id, 'calc_es_path', true ),
						'enPath' => '/en/' . ltrim( $slug, '/' ),
					)
				),
			)
		);

		if ( ! is_wp_error( $response ) && 200 === (int) wp_remote_retrieve_response_code( $response ) ) {
			update_post_meta( $post_id, 'last_synced', current_time( 'mysql' ) );
		}
	}
}
