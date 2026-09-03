<?php
/**
 * Deactivation — clears scheduled batch events. Leaves data intact.
 *
 * @package Calcvora_SEO_Manager
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Calcvora_Deactivator {

	public static function deactivate() {
		$hook      = 'calcvora_seed_batch';
		$timestamp = wp_next_scheduled( $hook );
		while ( $timestamp ) {
			wp_unschedule_event( $timestamp, $hook );
			$timestamp = wp_next_scheduled( $hook );
		}
	}
}
