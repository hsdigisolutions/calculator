<?php
/**
 * Runs when the plugin is deleted from WordPress.
 * Only destroys data if the admin opted in (Settings → "Delete all data on uninstall").
 *
 * @package Calcvora_SEO_Manager
 */

if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

$cpt = 'calculator_page';
$tax = 'calc_category';

// Always remove our scheduled event + transient options.
$timestamp = wp_next_scheduled( 'calcvora_seed_batch' );
while ( $timestamp ) {
	wp_unschedule_event( $timestamp, 'calcvora_seed_batch' );
	$timestamp = wp_next_scheduled( 'calcvora_seed_batch' );
}
delete_option( 'calcvora_seed_queue' );
delete_option( 'calcvora_seed_total' );
delete_option( 'calcvora_seed_done' );
delete_option( 'calcvora_seed_complete' );

if ( (int) get_option( 'calcvora_delete_on_uninstall', 0 ) === 1 ) {
	$ids = get_posts(
		array(
			'post_type'      => $cpt,
			'post_status'    => 'any',
			'posts_per_page' => -1,
			'fields'         => 'ids',
		)
	);
	foreach ( $ids as $id ) {
		wp_delete_post( $id, true ); // Deletes post + its meta.
	}
	$terms = get_terms( array( 'taxonomy' => $tax, 'hide_empty' => false ) );
	if ( ! is_wp_error( $terms ) ) {
		foreach ( $terms as $term ) {
			wp_delete_term( $term->term_id, $tax );
		}
	}
	delete_option( 'calcvora_next_url' );
	delete_option( 'calcvora_revalidate_secret' );
	delete_option( 'calcvora_delete_on_uninstall' );
}
