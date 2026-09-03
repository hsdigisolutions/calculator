<?php
/**
 * Core loader — wires up every subsystem.
 *
 * @package Calcvora_SEO_Manager
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Calcvora_SEO_Manager {

	public function run() {
		$this->load_dependencies();
		$this->register_hooks();
	}

	private function load_dependencies() {
		$dir = CALCVORA_SEO_DIR . 'includes/';
		require_once $dir . 'class-calcvora-slugs.php';
		require_once $dir . 'class-calcvora-cpt.php';
		require_once $dir . 'class-calcvora-taxonomy.php';
		require_once $dir . 'class-calcvora-meta-fields.php';
		require_once $dir . 'class-calcvora-graphql.php';
		require_once $dir . 'class-calcvora-background-process.php';
		require_once $dir . 'class-calcvora-quality.php';
		require_once $dir . 'class-calcvora-revalidate.php';

		if ( is_admin() ) {
			require_once CALCVORA_SEO_DIR . 'admin/class-calcvora-admin.php';
		}
	}

	private function register_hooks() {
		// i18n.
		add_action(
			'plugins_loaded',
			function () {
				load_plugin_textdomain( 'calcvora-seo-manager', false, dirname( plugin_basename( CALCVORA_SEO_FILE ) ) . '/languages' );
			}
		);

		// Content model.
		add_action( 'init', array( 'Calcvora_CPT', 'register' ) );
		add_action( 'init', array( 'Calcvora_Taxonomy', 'register' ) );
		add_action( 'init', array( 'Calcvora_Meta_Fields', 'register' ) );

		// GraphQL exposure.
		add_action( 'graphql_register_types', array( 'Calcvora_GraphQL', 'register' ) );

		// Background creation processor.
		Calcvora_Background_Process::init();

		// Content quality + word count + status nudges on save.
		add_action( 'save_post_' . CALCVORA_SEO_CPT, array( 'Calcvora_Quality', 'on_save' ), 20, 3 );
		// Keep word count correct when content is written via REST/GraphQL (e.g. seeding).
		add_action( 'updated_post_meta', array( 'Calcvora_Quality', 'on_meta_update' ), 10, 3 );
		add_action( 'added_post_meta', array( 'Calcvora_Quality', 'on_meta_update' ), 10, 3 );

		// Fire Next.js ISR revalidation on save.
		add_action( 'save_post_' . CALCVORA_SEO_CPT, array( 'Calcvora_Revalidate', 'on_save' ), 30, 3 );

		// Admin UI.
		if ( is_admin() ) {
			$admin = new Calcvora_Admin();
			$admin->hooks();
		}
	}
}
