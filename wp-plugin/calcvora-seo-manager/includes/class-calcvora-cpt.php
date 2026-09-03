<?php
/**
 * Registers the calculator_page custom post type.
 *
 * public:false — no WP front-end URL or sitemap entry (the Next.js app owns URLs).
 * show_in_graphql:true — headless editing surface for the front end.
 *
 * @package Calcvora_SEO_Manager
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Calcvora_CPT {

	public static function register() {
		$labels = array(
			'name'               => __( 'Calculator Pages', 'calcvora-seo-manager' ),
			'singular_name'      => __( 'Calculator Page', 'calcvora-seo-manager' ),
			'menu_name'          => __( 'Calculator Pages', 'calcvora-seo-manager' ),
			'add_new'            => __( 'Add New', 'calcvora-seo-manager' ),
			'add_new_item'       => __( 'Add New Calculator Page', 'calcvora-seo-manager' ),
			'edit_item'          => __( 'Edit Calculator Page', 'calcvora-seo-manager' ),
			'new_item'           => __( 'New Calculator Page', 'calcvora-seo-manager' ),
			'view_item'          => __( 'View Calculator Page', 'calcvora-seo-manager' ),
			'search_items'       => __( 'Search Calculator Pages', 'calcvora-seo-manager' ),
			'not_found'          => __( 'No calculator pages found', 'calcvora-seo-manager' ),
			'not_found_in_trash' => __( 'No calculator pages found in Trash', 'calcvora-seo-manager' ),
			'all_items'          => __( 'All Calculator Pages', 'calcvora-seo-manager' ),
		);

		register_post_type(
			CALCVORA_SEO_CPT,
			array(
				'labels'              => $labels,
				'public'              => false,
				'publicly_queryable'  => false,
				'exclude_from_search' => true,
				'has_archive'         => false,
				'rewrite'             => false,
				'query_var'           => false,
				'show_ui'             => true,
				'show_in_menu'        => true,
				'show_in_admin_bar'   => false,
				'show_in_nav_menus'   => false,
				'menu_icon'           => 'dashicons-calculator',
				'menu_position'       => 26,
				'capability_type'     => 'post',
				'map_meta_cap'        => true,
				'supports'            => array( 'title', 'editor', 'custom-fields', 'revisions', 'author' ),
				'show_in_rest'        => true,
				'rest_base'           => 'calculator-pages',
				'show_in_graphql'     => true,
				'graphql_single_name' => 'calculatorPage',
				'graphql_plural_name' => 'calculatorPages',
			)
		);
	}
}
