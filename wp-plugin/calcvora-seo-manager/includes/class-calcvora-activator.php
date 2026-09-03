<?php
/**
 * Activation — seeds the background creation queue. Never creates inline.
 *
 * @package Calcvora_SEO_Manager
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Calcvora_Activator {

	public static function activate() {
		require_once CALCVORA_SEO_DIR . 'includes/class-calcvora-slugs.php';
		require_once CALCVORA_SEO_DIR . 'includes/class-calcvora-background-process.php';
		Calcvora_Background_Process::seed_queue();
	}
}
