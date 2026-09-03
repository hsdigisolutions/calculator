<?php
/**
 * Exposes calculator meta over WPGraphQL.
 *
 * IMPORTANT: we never name a field `seo` — that belongs to WPGraphQL-for-RankMath.
 * Our fields live under `calcMeta` to avoid any collision. We also force RankMath
 * tracking on this CPT so its `seo { ... }` resolver attaches even though the CPT
 * is public:false.
 *
 * @package Calcvora_SEO_Manager
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Calcvora_GraphQL {

	public static function register() {
		register_graphql_object_type(
			'CalcvoraFaq',
			array(
				'description' => __( 'A calculator FAQ (Spanish).', 'calcvora-seo-manager' ),
				'fields'      => array(
					'question' => array( 'type' => 'String' ),
					'answer'   => array( 'type' => 'String' ),
				),
			)
		);

		register_graphql_object_type(
			'CalcvoraMeta',
			array(
				'description' => __( 'Calcvora SEO + content meta for a calculator page.', 'calcvora-seo-manager' ),
				'fields'      => array(
					'calcSlug'         => array( 'type' => 'String' ),
					'calcCategory'     => array( 'type' => 'String' ),
					'intro'            => array( 'type' => 'String' ),
					'explanation'      => array( 'type' => 'String' ),
					'example'          => array( 'type' => 'String' ),
					'faqs'             => array( 'type' => array( 'list_of' => 'CalcvoraFaq' ) ),
					'isIndexed'        => array( 'type' => 'Boolean' ),
					'schemaOverride'   => array( 'type' => 'String' ),
					'seoStatus'        => array( 'type' => 'String' ),
					'contentWordCount' => array( 'type' => 'Int' ),
					'lastSeoReview'    => array( 'type' => 'String' ),
					'priority'         => array( 'type' => 'String' ),
					'assignee'         => array( 'type' => 'String' ),
					'rankMathScore'    => array( 'type' => 'Int' ),
					'rmTitle'          => array( 'type' => 'String', 'description' => 'RankMath custom SEO title (raw; may contain %variables% if unset).' ),
					'rmDescription'    => array( 'type' => 'String', 'description' => 'RankMath custom meta description (raw).' ),
					'rmCanonical'      => array( 'type' => 'String', 'description' => 'RankMath custom canonical URL, if set.' ),
				),
			)
		);

		register_graphql_field(
			'CalculatorPage',
			'calcMeta',
			array(
				'type'        => 'CalcvoraMeta',
				'description' => __( 'Calcvora meta for this calculator page.', 'calcvora-seo-manager' ),
				'resolve'     => array( __CLASS__, 'resolve_meta' ),
			)
		);

		register_graphql_field(
			'RootQuery',
			'calculatorPageBySlug',
			array(
				'type'        => 'CalculatorPage',
				'description' => __( 'Find a calculator page by its canonical (English) category/slug.', 'calcvora-seo-manager' ),
				'args'        => array(
					'slug' => array( 'type' => array( 'non_null' => 'String' ) ),
				),
				'resolve'     => array( __CLASS__, 'resolve_by_slug' ),
			)
		);
	}

	public static function resolve_meta( $post ) {
		$id   = is_object( $post ) && isset( $post->ID ) ? $post->ID : ( is_object( $post ) && isset( $post->databaseId ) ? $post->databaseId : 0 );
		$faqs = json_decode( (string) get_post_meta( $id, 'calc_faqs', true ), true );
		$faqs = is_array( $faqs ) ? array_map(
			function ( $f ) {
				return array(
					'question' => isset( $f['question'] ) ? $f['question'] : '',
					'answer'   => isset( $f['answer'] ) ? $f['answer'] : '',
				);
			},
			$faqs
		) : array();

		$indexed_raw = get_post_meta( $id, 'is_indexed', true );
		// Default FALSE (strict opt-in): unset OR explicit-noindex ('') both read as noindex.
		$is_indexed  = ( '' === $indexed_raw ) ? false : (bool) $indexed_raw;

		return array(
			'calcSlug'         => (string) get_post_meta( $id, 'calc_slug', true ),
			'calcCategory'     => (string) get_post_meta( $id, 'calc_category', true ),
			'intro'            => (string) get_post_meta( $id, 'calc_intro', true ),
			'explanation'      => (string) get_post_meta( $id, 'calc_explanation', true ),
			'example'          => (string) get_post_meta( $id, 'calc_example', true ),
			'faqs'             => $faqs,
			'isIndexed'        => $is_indexed,
			'schemaOverride'   => (string) get_post_meta( $id, 'schema_override', true ),
			'seoStatus'        => (string) get_post_meta( $id, 'seo_status', true ),
			'contentWordCount' => (int) get_post_meta( $id, 'content_word_count', true ),
			'lastSeoReview'    => (string) get_post_meta( $id, 'last_seo_review', true ),
			'priority'         => (string) get_post_meta( $id, 'priority', true ),
			'assignee'         => (string) get_post_meta( $id, 'assignee', true ),
			'rankMathScore'    => (int) get_post_meta( $id, 'rank_math_seo_score', true ),
			'rmTitle'          => (string) get_post_meta( $id, 'rank_math_title', true ),
			'rmDescription'    => (string) get_post_meta( $id, 'rank_math_description', true ),
			'rmCanonical'      => (string) get_post_meta( $id, 'rank_math_canonical_url', true ),
		);
	}

	public static function resolve_by_slug( $root, $args, $context ) {
		$slug  = isset( $args['slug'] ) ? ltrim( (string) $args['slug'], '/' ) : '';
		$posts = get_posts(
			array(
				'post_type'      => CALCVORA_SEO_CPT,
				'post_status'    => 'publish',
				'posts_per_page' => 1,
				'no_found_rows'  => true,
				'meta_query'     => array(
					array(
						'key'   => 'calc_slug',
						'value' => $slug,
					),
				),
			)
		);
		if ( empty( $posts ) ) {
			return null;
		}
		return $context->get_loader( 'post' )->load_deferred( $posts[0]->ID );
	}
}
