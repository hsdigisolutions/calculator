<?php
/**
 * Registers meta fields + edit-screen metaboxes for calculator_page.
 *
 * All fields are self-contained via register_post_meta (no ACF dependency).
 * `is_indexed` defaults to FALSE (strict opt-in, per product decision): a page
 * stays noindex until an SEO expert explicitly opts it into indexing.
 *
 * @package Calcvora_SEO_Manager
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Calcvora_Meta_Fields {

	const NONCE = 'calcvora_meta_nonce';

	/** @return array<string,array> */
	public static function schema() {
		return array(
			'calc_slug'          => array( 'type' => 'string',  'default' => '' ),
			'calc_category'      => array( 'type' => 'string',  'default' => '' ),
			'calc_intro'         => array( 'type' => 'string',  'default' => '' ),
			'calc_explanation'   => array( 'type' => 'string',  'default' => '' ),
			'calc_example'       => array( 'type' => 'string',  'default' => '' ),
			'calc_faqs'          => array( 'type' => 'string',  'default' => '[]' ),
			'is_indexed'         => array( 'type' => 'boolean', 'default' => false ),
			'schema_override'    => array( 'type' => 'string',  'default' => '' ),
			'seo_status'         => array( 'type' => 'string',  'default' => 'pending' ),
			'content_word_count' => array( 'type' => 'integer', 'default' => 0 ),
			'last_seo_review'    => array( 'type' => 'string',  'default' => '' ),
			'assignee'           => array( 'type' => 'string',  'default' => '' ),
			'priority'           => array( 'type' => 'string',  'default' => 'normal' ),
			'team_notes'         => array( 'type' => 'string',  'default' => '' ),
			'last_synced'        => array( 'type' => 'string',  'default' => '' ),
		);
	}

	public static function register() {
		$auth = function () {
			return current_user_can( 'edit_posts' );
		};
		foreach ( self::schema() as $key => $def ) {
			register_post_meta(
				CALCVORA_SEO_CPT,
				$key,
				array(
					'type'              => $def['type'],
					'single'            => true,
					'default'           => $def['default'],
					'show_in_rest'      => true,
					'auth_callback'     => $auth,
					'sanitize_callback' => null, // Sanitized explicitly on save.
				)
			);
		}

		add_action( 'add_meta_boxes_' . CALCVORA_SEO_CPT, array( __CLASS__, 'metaboxes' ) );
		add_action( 'save_post_' . CALCVORA_SEO_CPT, array( __CLASS__, 'save' ), 10, 2 );
	}

	public static function metaboxes() {
		add_meta_box( 'calcvora_content', __( 'Calculator Content (Spanish)', 'calcvora-seo-manager' ), array( __CLASS__, 'render_content' ), CALCVORA_SEO_CPT, 'normal', 'high' );
		add_meta_box( 'calcvora_seo', __( 'SEO & Optimization', 'calcvora-seo-manager' ), array( __CLASS__, 'render_seo' ), CALCVORA_SEO_CPT, 'side', 'high' );
	}

	private static function get( $post_id, $key ) {
		$val = get_post_meta( $post_id, $key, true );
		if ( '' === $val && isset( self::schema()[ $key ] ) ) {
			return self::schema()[ $key ]['default'];
		}
		return $val;
	}

	public static function render_content( $post ) {
		wp_nonce_field( 'calcvora_save_' . $post->ID, self::NONCE );
		$intro       = self::get( $post->ID, 'calc_intro' );
		$explanation = self::get( $post->ID, 'calc_explanation' );
		$example     = self::get( $post->ID, 'calc_example' );
		$faqs        = json_decode( self::get( $post->ID, 'calc_faqs' ), true );
		$faqs        = is_array( $faqs ) ? $faqs : array();

		echo '<p class="description">' . esc_html__( 'Spanish content shown on the calculator page. Explanation should be 300+ words; add at least 3 FAQs.', 'calcvora-seo-manager' ) . '</p>';

		echo '<p><strong>' . esc_html__( 'Intro paragraph (above the calculator)', 'calcvora-seo-manager' ) . '</strong></p>';
		wp_editor( $intro, 'calc_intro', array( 'textarea_name' => 'calc_intro', 'textarea_rows' => 4, 'media_buttons' => false ) );

		echo '<p style="margin-top:16px;"><strong>' . esc_html__( 'Explanation (how it works)', 'calcvora-seo-manager' ) . '</strong></p>';
		wp_editor( $explanation, 'calc_explanation', array( 'textarea_name' => 'calc_explanation', 'textarea_rows' => 10, 'media_buttons' => false ) );

		echo '<p style="margin-top:16px;"><strong>' . esc_html__( 'Worked example', 'calcvora-seo-manager' ) . '</strong></p>';
		wp_editor( $example, 'calc_example', array( 'textarea_name' => 'calc_example', 'textarea_rows' => 4, 'media_buttons' => false ) );

		echo '<p style="margin-top:16px;"><strong>' . esc_html__( 'FAQs', 'calcvora-seo-manager' ) . '</strong></p>';
		echo '<div id="calcvora-faqs" class="calcvora-faqs">';
		if ( empty( $faqs ) ) {
			$faqs = array( array( 'question' => '', 'answer' => '' ) );
		}
		foreach ( $faqs as $faq ) {
			self::render_faq_row( isset( $faq['question'] ) ? $faq['question'] : '', isset( $faq['answer'] ) ? $faq['answer'] : '' );
		}
		echo '</div>';
		echo '<button type="button" class="button" id="calcvora-add-faq">' . esc_html__( '+ Add FAQ', 'calcvora-seo-manager' ) . '</button>';

		// Row template for JS cloning.
		echo '<script type="text/template" id="calcvora-faq-template">';
		self::render_faq_row( '', '' );
		echo '</script>';
	}

	public static function render_faq_row( $q, $a ) {
		echo '<div class="calcvora-faq-row">';
		echo '<input type="text" class="widefat" name="calc_faq_q[]" placeholder="' . esc_attr__( 'Question', 'calcvora-seo-manager' ) . '" value="' . esc_attr( $q ) . '" />';
		echo '<textarea class="widefat" rows="2" name="calc_faq_a[]" placeholder="' . esc_attr__( 'Answer', 'calcvora-seo-manager' ) . '">' . esc_textarea( $a ) . '</textarea>';
		echo '<button type="button" class="button-link calcvora-remove-faq" aria-label="' . esc_attr__( 'Remove', 'calcvora-seo-manager' ) . '">&times; ' . esc_html__( 'Remove', 'calcvora-seo-manager' ) . '</button>';
		echo '</div>';
	}

	public static function render_seo( $post ) {
		$slug     = self::get( $post->ID, 'calc_slug' );
		$indexed  = (bool) self::get( $post->ID, 'is_indexed' );
		$status   = self::get( $post->ID, 'seo_status' );
		$priority = self::get( $post->ID, 'priority' );
		$assignee = self::get( $post->ID, 'assignee' );
		$review   = self::get( $post->ID, 'last_seo_review' );
		$schema   = self::get( $post->ID, 'schema_override' );
		$notes    = self::get( $post->ID, 'team_notes' );
		$words    = (int) self::get( $post->ID, 'content_word_count' );
		$rm_score = (int) get_post_meta( $post->ID, 'rank_math_seo_score', true );
		$synced   = self::get( $post->ID, 'last_synced' );
		$preview  = Calcvora_Revalidate::preview_url( $slug );

		echo '<p><strong>' . esc_html__( 'Slug', 'calcvora-seo-manager' ) . '</strong><br><code>' . esc_html( $slug ) . '</code></p>';

		echo '<p><label><input type="checkbox" name="is_indexed" value="1" ' . checked( $indexed, true, false ) . ' /> ' . esc_html__( 'Indexed (allow search engines)', 'calcvora-seo-manager' ) . '</label></p>';

		echo '<p><label><strong>' . esc_html__( 'SEO status', 'calcvora-seo-manager' ) . '</strong></label><br>';
		echo '<select name="seo_status" class="widefat">';
		foreach ( array( 'pending' => __( 'Pending', 'calcvora-seo-manager' ), 'in_progress' => __( 'In progress', 'calcvora-seo-manager' ), 'done' => __( 'Done', 'calcvora-seo-manager' ) ) as $k => $label ) {
			echo '<option value="' . esc_attr( $k ) . '" ' . selected( $status, $k, false ) . '>' . esc_html( $label ) . '</option>';
		}
		echo '</select></p>';

		echo '<p><label><strong>' . esc_html__( 'Priority', 'calcvora-seo-manager' ) . '</strong></label><br>';
		echo '<select name="priority" class="widefat">';
		foreach ( array( 'low' => __( 'Low', 'calcvora-seo-manager' ), 'normal' => __( 'Normal', 'calcvora-seo-manager' ), 'high' => __( 'High', 'calcvora-seo-manager' ) ) as $k => $label ) {
			echo '<option value="' . esc_attr( $k ) . '" ' . selected( $priority, $k, false ) . '>' . esc_html( $label ) . '</option>';
		}
		echo '</select></p>';

		echo '<p><label><strong>' . esc_html__( 'Assignee', 'calcvora-seo-manager' ) . '</strong></label><br><input type="text" class="widefat" name="assignee" value="' . esc_attr( $assignee ) . '" /></p>';

		echo '<p><label><strong>' . esc_html__( 'Last SEO review', 'calcvora-seo-manager' ) . '</strong></label><br><input type="date" class="widefat" name="last_seo_review" value="' . esc_attr( $review ) . '" /></p>';

		echo '<p><label><strong>' . esc_html__( 'JSON-LD schema override', 'calcvora-seo-manager' ) . '</strong></label><br>';
		echo '<textarea class="widefat code" rows="5" name="schema_override" placeholder="{ &quot;@context&quot;: &quot;https://schema.org&quot;, ... }">' . esc_textarea( $schema ) . '</textarea>';
		echo '<span class="description">' . esc_html__( 'Leave blank to use the auto-generated schema.', 'calcvora-seo-manager' ) . '</span></p>';

		echo '<p><label><strong>' . esc_html__( 'Team notes', 'calcvora-seo-manager' ) . '</strong></label><br><textarea class="widefat" rows="3" name="team_notes">' . esc_textarea( $notes ) . '</textarea></p>';

		echo '<hr><ul class="calcvora-facts">';
		echo '<li>' . esc_html__( 'Word count', 'calcvora-seo-manager' ) . ': <strong>' . esc_html( $words ) . '</strong></li>';
		echo '<li>' . esc_html__( 'RankMath score', 'calcvora-seo-manager' ) . ': <strong>' . esc_html( $rm_score ) . '/100</strong></li>';
		if ( $synced ) {
			echo '<li>' . esc_html__( 'Last synced to Next', 'calcvora-seo-manager' ) . ': <strong>' . esc_html( $synced ) . '</strong></li>';
		}
		echo '</ul>';

		if ( $preview ) {
			echo '<a href="' . esc_url( $preview ) . '" target="_blank" rel="noopener" class="button button-secondary">' . esc_html__( 'Preview in Next.js ↗', 'calcvora-seo-manager' ) . '</a>';
		}
	}

	public static function save( $post_id, $post ) {
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}
		if ( wp_is_post_revision( $post_id ) ) {
			return;
		}
		if ( ! isset( $_POST[ self::NONCE ] ) || ! wp_verify_nonce( sanitize_key( $_POST[ self::NONCE ] ), 'calcvora_save_' . $post_id ) ) {
			return;
		}
		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}

		// Content (HTML allowed via wp_kses_post).
		foreach ( array( 'calc_intro', 'calc_explanation', 'calc_example' ) as $key ) {
			if ( isset( $_POST[ $key ] ) ) {
				update_post_meta( $post_id, $key, wp_kses_post( wp_unslash( $_POST[ $key ] ) ) );
			}
		}

		// FAQs -> JSON.
		$faqs = array();
		$qs   = isset( $_POST['calc_faq_q'] ) ? (array) wp_unslash( $_POST['calc_faq_q'] ) : array();
		$as   = isset( $_POST['calc_faq_a'] ) ? (array) wp_unslash( $_POST['calc_faq_a'] ) : array();
		foreach ( $qs as $i => $q ) {
			$q = trim( wp_kses_post( $q ) );
			$a = isset( $as[ $i ] ) ? trim( wp_kses_post( $as[ $i ] ) ) : '';
			if ( '' !== $q || '' !== $a ) {
				$faqs[] = array( 'question' => $q, 'answer' => $a );
			}
		}
		update_post_meta( $post_id, 'calc_faqs', wp_json_encode( $faqs ) );

		// Toggles / status.
		update_post_meta( $post_id, 'is_indexed', isset( $_POST['is_indexed'] ) ? true : false );

		$status = isset( $_POST['seo_status'] ) ? sanitize_key( wp_unslash( $_POST['seo_status'] ) ) : 'pending';
		update_post_meta( $post_id, 'seo_status', in_array( $status, array( 'pending', 'in_progress', 'done' ), true ) ? $status : 'pending' );

		$priority = isset( $_POST['priority'] ) ? sanitize_key( wp_unslash( $_POST['priority'] ) ) : 'normal';
		update_post_meta( $post_id, 'priority', in_array( $priority, array( 'low', 'normal', 'high' ), true ) ? $priority : 'normal' );

		update_post_meta( $post_id, 'assignee', isset( $_POST['assignee'] ) ? sanitize_text_field( wp_unslash( $_POST['assignee'] ) ) : '' );
		update_post_meta( $post_id, 'team_notes', isset( $_POST['team_notes'] ) ? sanitize_textarea_field( wp_unslash( $_POST['team_notes'] ) ) : '' );

		$review = isset( $_POST['last_seo_review'] ) ? sanitize_text_field( wp_unslash( $_POST['last_seo_review'] ) ) : '';
		update_post_meta( $post_id, 'last_seo_review', preg_match( '/^\d{4}-\d{2}-\d{2}$/', $review ) ? $review : '' );

		// Schema override — store only if valid JSON, else blank + flag.
		$schema = isset( $_POST['schema_override'] ) ? trim( wp_unslash( $_POST['schema_override'] ) ) : '';
		if ( '' !== $schema && null === json_decode( $schema ) ) {
			update_post_meta( $post_id, '_calcvora_schema_invalid', 1 );
		} else {
			delete_post_meta( $post_id, '_calcvora_schema_invalid' );
		}
		update_post_meta( $post_id, 'schema_override', $schema );
	}
}
