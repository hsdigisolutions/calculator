<?php
/**
 * Registers the calc_category taxonomy for calculator_page.
 * A real taxonomy gives us the admin filter dropdown, GraphQL where-args
 * and clean grouping for free.
 *
 * @package Calcvora_SEO_Manager
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Calcvora_Taxonomy {

	public static function register() {
		register_taxonomy(
			CALCVORA_SEO_TAX,
			CALCVORA_SEO_CPT,
			array(
				'labels'             => array(
					'name'          => __( 'Categories', 'calcvora-seo-manager' ),
					'singular_name' => __( 'Category', 'calcvora-seo-manager' ),
					'menu_name'     => __( 'Categories', 'calcvora-seo-manager' ),
				),
				'public'             => false,
				'publicly_queryable' => false,
				'hierarchical'       => true,
				'show_ui'            => true,
				'show_admin_column'  => false, // We render our own richer column.
				'show_in_menu'       => true,
				'show_in_rest'       => true,
				'rewrite'            => false,
				'query_var'          => false,
				'show_in_graphql'    => true,
				'graphql_single_name' => 'calcCategory',
				'graphql_plural_name' => 'calcCategories',
			)
		);
	}

	/**
	 * Ensure a term exists for a category slug and return its term_id.
	 */
	public static function ensure_term( $slug, $name ) {
		$term = get_term_by( 'slug', $slug, CALCVORA_SEO_TAX );
		if ( $term ) {
			return (int) $term->term_id;
		}
		$created = wp_insert_term( $name, CALCVORA_SEO_TAX, array( 'slug' => $slug ) );
		if ( is_wp_error( $created ) ) {
			return 0;
		}
		return (int) $created['term_id'];
	}
}
