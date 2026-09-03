<?php
/**
 * Admin UI: list columns, filters, row/bulk actions, AJAX toggle,
 * dashboard widget, settings, CSV export, progress notices.
 *
 * @package Calcvora_SEO_Manager
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Calcvora_Admin {

	public function hooks() {
		add_action( 'admin_enqueue_scripts', array( $this, 'assets' ) );

		add_filter( 'manage_' . CALCVORA_SEO_CPT . '_posts_columns', array( $this, 'columns' ) );
		add_action( 'manage_' . CALCVORA_SEO_CPT . '_posts_custom_column', array( $this, 'column' ), 10, 2 );
		add_filter( 'manage_edit-' . CALCVORA_SEO_CPT . '_sortable_columns', array( $this, 'sortable' ) );

		add_action( 'restrict_manage_posts', array( $this, 'filters' ) );
		add_action( 'pre_get_posts', array( $this, 'apply_filters' ) );

		add_filter( 'post_row_actions', array( $this, 'row_actions' ), 10, 2 );

		add_filter( 'bulk_actions-edit-' . CALCVORA_SEO_CPT, array( $this, 'bulk_actions' ) );
		add_filter( 'handle_bulk_actions-edit-' . CALCVORA_SEO_CPT, array( $this, 'handle_bulk' ), 10, 3 );

		add_action( 'wp_ajax_calcvora_toggle_index', array( $this, 'ajax_toggle_index' ) );
		add_action( 'wp_ajax_calcvora_run_batch', array( $this, 'ajax_run_batch' ) );

		add_action( 'wp_dashboard_setup', array( $this, 'dashboard_widget' ) );
		add_action( 'admin_notices', array( $this, 'notices' ) );

		add_action( 'admin_menu', array( $this, 'menu' ) );
		add_action( 'admin_init', array( $this, 'register_settings' ) );
		add_action( 'admin_post_calcvora_export_csv', array( $this, 'export_csv' ) );
	}

	public function assets( $hook ) {
		$screen = get_current_screen();
		$is_cpt = $screen && CALCVORA_SEO_CPT === $screen->post_type;
		if ( ! $is_cpt && 'index.php' !== $hook && 'calculator_page_page_calcvora-settings' !== $hook ) {
			return;
		}
		wp_enqueue_style( 'calcvora-admin', CALCVORA_SEO_URL . 'admin/css/calcvora-admin.css', array(), CALCVORA_SEO_VERSION );
		wp_enqueue_script( 'calcvora-admin', CALCVORA_SEO_URL . 'admin/js/calcvora-admin.js', array( 'jquery' ), CALCVORA_SEO_VERSION, true );
		wp_localize_script(
			'calcvora-admin',
			'CalcvoraAdmin',
			array(
				'ajaxUrl'      => admin_url( 'admin-ajax.php' ),
				'toggleNonce'  => wp_create_nonce( 'calcvora_toggle' ),
				'batchNonce'   => wp_create_nonce( 'calcvora_batch' ),
			)
		);
	}

	/* ---------------- List columns ---------------- */

	public function columns( $cols ) {
		$new = array( 'cb' => $cols['cb'], 'title' => $cols['title'] );
		$new['calc_slug']    = __( 'Slug', 'calcvora-seo-manager' );
		$new['calc_cat']     = __( 'Category', 'calcvora-seo-manager' );
		$new['seo_status']   = __( 'SEO Status', 'calcvora-seo-manager' );
		$new['is_indexed']   = __( 'Indexed', 'calcvora-seo-manager' );
		$new['words']        = __( 'Words', 'calcvora-seo-manager' );
		$new['rm_score']     = __( 'RankMath', 'calcvora-seo-manager' );
		$new['priority']     = __( 'Priority', 'calcvora-seo-manager' );
		$new['date']         = $cols['date'];
		return $new;
	}

	public function sortable( $cols ) {
		$cols['words']      = 'content_word_count';
		$cols['seo_status'] = 'seo_status';
		$cols['priority']   = 'priority';
		return $cols;
	}

	public function column( $col, $post_id ) {
		switch ( $col ) {
			case 'calc_slug':
				echo '<code>' . esc_html( get_post_meta( $post_id, 'calc_slug', true ) ) . '</code>';
				break;
			case 'calc_cat':
				echo esc_html( get_post_meta( $post_id, 'calc_category', true ) );
				break;
			case 'seo_status':
				$s = get_post_meta( $post_id, 'seo_status', true ) ?: 'pending';
				printf( '<span class="calcvora-badge calcvora-badge--%1$s">%2$s</span>', esc_attr( $s ), esc_html( ucwords( str_replace( '_', ' ', $s ) ) ) );
				break;
			case 'is_indexed':
				$raw = get_post_meta( $post_id, 'is_indexed', true );
				$on  = ( '' === $raw ) ? false : (bool) $raw;
				echo '<span class="calcvora-index" data-id="' . esc_attr( $post_id ) . '">' . ( $on ? '✅' : '❌' ) . '</span>';
				break;
			case 'words':
				$w = (int) get_post_meta( $post_id, 'content_word_count', true );
				printf( '<span class="calcvora-words %s">%d</span>', $w >= 300 ? 'ok' : 'low', $w );
				break;
			case 'rm_score':
				$sc = (int) get_post_meta( $post_id, 'rank_math_seo_score', true );
				echo esc_html( $sc ) . '/100';
				break;
			case 'priority':
				echo esc_html( ucfirst( get_post_meta( $post_id, 'priority', true ) ?: 'normal' ) );
				break;
		}
	}

	/* ---------------- Filters ---------------- */

	public function filters( $post_type ) {
		if ( CALCVORA_SEO_CPT !== $post_type ) {
			return;
		}
		// Category (taxonomy) dropdown.
		$current_cat = isset( $_GET[ CALCVORA_SEO_TAX ] ) ? sanitize_text_field( wp_unslash( $_GET[ CALCVORA_SEO_TAX ] ) ) : '';
		wp_dropdown_categories(
			array(
				'taxonomy'        => CALCVORA_SEO_TAX,
				'name'            => CALCVORA_SEO_TAX,
				'show_option_all' => __( 'All categories', 'calcvora-seo-manager' ),
				'value_field'     => 'slug',
				'selected'        => $current_cat,
				'hide_empty'      => false,
			)
		);
		// SEO status.
		$status = isset( $_GET['calcvora_status'] ) ? sanitize_key( wp_unslash( $_GET['calcvora_status'] ) ) : '';
		echo '<select name="calcvora_status"><option value="">' . esc_html__( 'All statuses', 'calcvora-seo-manager' ) . '</option>';
		foreach ( array( 'pending', 'in_progress', 'done' ) as $s ) {
			echo '<option value="' . esc_attr( $s ) . '" ' . selected( $status, $s, false ) . '>' . esc_html( ucwords( str_replace( '_', ' ', $s ) ) ) . '</option>';
		}
		echo '</select>';
		// Indexed.
		$idx = isset( $_GET['calcvora_indexed'] ) ? sanitize_key( wp_unslash( $_GET['calcvora_indexed'] ) ) : '';
		echo '<select name="calcvora_indexed"><option value="">' . esc_html__( 'Indexed: any', 'calcvora-seo-manager' ) . '</option>';
		echo '<option value="yes" ' . selected( $idx, 'yes', false ) . '>' . esc_html__( 'Indexed', 'calcvora-seo-manager' ) . '</option>';
		echo '<option value="no" ' . selected( $idx, 'no', false ) . '>' . esc_html__( 'NoIndex', 'calcvora-seo-manager' ) . '</option>';
		echo '</select>';
	}

	public function apply_filters( $query ) {
		if ( ! is_admin() || ! $query->is_main_query() ) {
			return;
		}
		if ( CALCVORA_SEO_CPT !== $query->get( 'post_type' ) ) {
			return;
		}
		$meta = array();
		if ( ! empty( $_GET['calcvora_status'] ) ) {
			$meta[] = array( 'key' => 'seo_status', 'value' => sanitize_key( wp_unslash( $_GET['calcvora_status'] ) ) );
		}
		if ( ! empty( $_GET['calcvora_indexed'] ) ) {
			$idx = sanitize_key( wp_unslash( $_GET['calcvora_indexed'] ) );
			if ( 'no' === $idx ) {
				$meta[] = array( 'key' => 'is_indexed', 'value' => '', 'compare' => '=' );
			} elseif ( 'yes' === $idx ) {
				// Indexed = meta not set (default) OR truthy.
				$meta[] = array(
					'relation' => 'OR',
					array( 'key' => 'is_indexed', 'compare' => 'NOT EXISTS' ),
					array( 'key' => 'is_indexed', 'value' => '1' ),
				);
			}
		}
		if ( $meta ) {
			$meta['relation'] = 'AND';
			$query->set( 'meta_query', $meta );
		}
		if ( 'content_word_count' === $query->get( 'orderby' ) ) {
			$query->set( 'meta_key', 'content_word_count' );
			$query->set( 'orderby', 'meta_value_num' );
		}
	}

	/* ---------------- Row + bulk actions ---------------- */

	public function row_actions( $actions, $post ) {
		if ( CALCVORA_SEO_CPT !== $post->post_type ) {
			return $actions;
		}
		$id      = $post->ID;
		$preview = Calcvora_Revalidate::preview_url( get_post_meta( $id, 'calc_slug', true ) );
		$actions['calcvora_toggle'] = sprintf(
			'<a href="#" class="calcvora-toggle-link" data-id="%d">%s</a>',
			$id,
			esc_html__( 'Toggle Index', 'calcvora-seo-manager' )
		);
		if ( $preview ) {
			$actions['calcvora_preview'] = sprintf( '<a href="%s" target="_blank" rel="noopener">%s</a>', esc_url( $preview ), esc_html__( 'Preview ↗', 'calcvora-seo-manager' ) );
		}
		return $actions;
	}

	public function bulk_actions( $actions ) {
		$actions['calcvora_index']   = __( 'Mark Indexed', 'calcvora-seo-manager' );
		$actions['calcvora_noindex'] = __( 'Mark NoIndex', 'calcvora-seo-manager' );
		$actions['calcvora_done']    = __( 'Mark SEO Done', 'calcvora-seo-manager' );
		$actions['calcvora_pending'] = __( 'Mark SEO Pending', 'calcvora-seo-manager' );
		$actions['calcvora_seed']    = __( 'Seed content from app', 'calcvora-seo-manager' );
		return $actions;
	}

	public function handle_bulk( $redirect, $action, $ids ) {
		if ( ! current_user_can( 'edit_posts' ) ) {
			return $redirect;
		}
		$count = 0;
		foreach ( $ids as $id ) {
			switch ( $action ) {
				case 'calcvora_index':
					update_post_meta( $id, 'is_indexed', true );
					$count++;
					break;
				case 'calcvora_noindex':
					update_post_meta( $id, 'is_indexed', false );
					$count++;
					break;
				case 'calcvora_done':
					update_post_meta( $id, 'seo_status', 'done' );
					$count++;
					break;
				case 'calcvora_pending':
					update_post_meta( $id, 'seo_status', 'pending' );
					$count++;
					break;
				case 'calcvora_seed':
					if ( Calcvora_Background_Process::seed_content_for( $id ) ) {
						$count++;
					}
					break;
			}
		}
		if ( in_array( $action, array( 'calcvora_index', 'calcvora_noindex', 'calcvora_done', 'calcvora_pending', 'calcvora_seed' ), true ) ) {
			$redirect = add_query_arg( 'calcvora_bulk', $count, $redirect );
		}
		return $redirect;
	}

	/* ---------------- AJAX ---------------- */

	public function ajax_toggle_index() {
		check_ajax_referer( 'calcvora_toggle', 'nonce' );
		$id = isset( $_POST['id'] ) ? absint( $_POST['id'] ) : 0;
		if ( ! $id || ! current_user_can( 'edit_post', $id ) ) {
			wp_send_json_error();
		}
		$raw = get_post_meta( $id, 'is_indexed', true );
		$on  = ( '' === $raw ) ? false : (bool) $raw;
		update_post_meta( $id, 'is_indexed', ! $on );
		wp_send_json_success( array( 'indexed' => ! $on ) );
	}

	public function ajax_run_batch() {
		check_ajax_referer( 'calcvora_batch', 'nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error();
		}
		Calcvora_Background_Process::seed_queue();
		Calcvora_Background_Process::run_batch();
		wp_send_json_success(
			array(
				'total' => (int) get_option( 'calcvora_seed_total', 0 ),
				'done'  => (int) get_option( 'calcvora_seed_done', 0 ),
			)
		);
	}

	/* ---------------- Dashboard widget ---------------- */

	public function dashboard_widget() {
		wp_add_dashboard_widget( 'calcvora_progress', __( 'Calcvora SEO Progress', 'calcvora-seo-manager' ), array( $this, 'render_dashboard' ) );
	}

	public function render_dashboard() {
		$total    = (int) wp_count_posts( CALCVORA_SEO_CPT )->publish;
		$done     = $this->count_meta( 'seo_status', 'done' );
		$noindex  = $this->count_meta( 'is_indexed', '' ); // explicitly noindex
		$indexed  = $total - $noindex;
		$content  = $this->count_content_ok();
		$pct      = function ( $n ) use ( $total ) {
			return $total ? round( $n / $total * 100 ) : 0;
		};
		echo '<div class="calcvora-dash">';
		printf( '<p><strong>%d</strong> %s</p>', $total, esc_html__( 'calculator pages', 'calcvora-seo-manager' ) );
		$this->bar( __( 'Indexed', 'calcvora-seo-manager' ), $pct( $indexed ) );
		$this->bar( __( 'Has content (300+ words)', 'calcvora-seo-manager' ), $pct( $content ) );
		$this->bar( __( 'SEO done', 'calcvora-seo-manager' ), $pct( $done ) );
		echo '<p><a href="' . esc_url( admin_url( 'edit.php?post_type=' . CALCVORA_SEO_CPT ) ) . '">' . esc_html__( 'Manage calculator pages →', 'calcvora-seo-manager' ) . '</a></p>';
		echo '</div>';
	}

	private function bar( $label, $pct ) {
		printf(
			'<div class="calcvora-bar"><span>%1$s</span><div class="calcvora-bar__track"><div class="calcvora-bar__fill" style="width:%2$d%%"></div></div><em>%2$d%%</em></div>',
			esc_html( $label ),
			(int) $pct
		);
	}

	private function count_meta( $key, $value ) {
		global $wpdb;
		if ( '' === $value ) {
			// count posts where meta = '' (explicit noindex stored as '0'/'').
			return (int) $wpdb->get_var(
				$wpdb->prepare(
					"SELECT COUNT(p.ID) FROM {$wpdb->posts} p INNER JOIN {$wpdb->postmeta} m ON m.post_id=p.ID WHERE p.post_type=%s AND p.post_status='publish' AND m.meta_key='is_indexed' AND (m.meta_value='' OR m.meta_value='0')",
					CALCVORA_SEO_CPT
				)
			);
		}
		return (int) $wpdb->get_var(
			$wpdb->prepare(
				"SELECT COUNT(p.ID) FROM {$wpdb->posts} p INNER JOIN {$wpdb->postmeta} m ON m.post_id=p.ID WHERE p.post_type=%s AND p.post_status='publish' AND m.meta_key=%s AND m.meta_value=%s",
				CALCVORA_SEO_CPT,
				$key,
				$value
			)
		);
	}

	private function count_content_ok() {
		global $wpdb;
		return (int) $wpdb->get_var(
			$wpdb->prepare(
				"SELECT COUNT(p.ID) FROM {$wpdb->posts} p INNER JOIN {$wpdb->postmeta} m ON m.post_id=p.ID WHERE p.post_type=%s AND p.post_status='publish' AND m.meta_key='content_word_count' AND CAST(m.meta_value AS UNSIGNED) >= 300",
				CALCVORA_SEO_CPT
			)
		);
	}

	/* ---------------- Notices ---------------- */

	public function notices() {
		$screen = get_current_screen();
		// Seed progress.
		$total = (int) get_option( 'calcvora_seed_total', 0 );
		$queue = get_option( 'calcvora_seed_queue', array() );
		if ( $total && ! empty( $queue ) ) {
			$done = (int) get_option( 'calcvora_seed_done', 0 );
			printf(
				'<div class="notice notice-info"><p>%s <strong>%d/%d</strong>. %s</p></div>',
				esc_html__( 'Creating calculator pages…', 'calcvora-seo-manager' ),
				$done,
				$total,
				esc_html__( 'This runs in the background; refresh to update.', 'calcvora-seo-manager' )
			);
		}
		// Per-post warnings on edit screen.
		if ( $screen && 'post' === $screen->base && CALCVORA_SEO_CPT === $screen->post_type && isset( $_GET['post'] ) ) {
			$warnings = get_post_meta( absint( $_GET['post'] ), '_calcvora_warnings', true );
			if ( ! empty( $warnings ) && is_array( $warnings ) ) {
				echo '<div class="notice notice-warning"><p><strong>' . esc_html__( 'Content quality:', 'calcvora-seo-manager' ) . '</strong></p><ul style="list-style:disc;margin-left:20px;">';
				foreach ( $warnings as $w ) {
					echo '<li>' . esc_html( $w ) . '</li>';
				}
				echo '</ul></div>';
			}
		}
		// Bulk result.
		if ( isset( $_GET['calcvora_bulk'] ) ) {
			printf( '<div class="notice notice-success is-dismissible"><p>%s</p></div>', esc_html( sprintf( /* translators: %d count */ __( 'Updated %d calculator page(s).', 'calcvora-seo-manager' ), absint( $_GET['calcvora_bulk'] ) ) ) );
		}
	}

	/* ---------------- Settings + CSV ---------------- */

	public function menu() {
		add_submenu_page(
			'edit.php?post_type=' . CALCVORA_SEO_CPT,
			__( 'Calcvora Settings', 'calcvora-seo-manager' ),
			__( 'Settings', 'calcvora-seo-manager' ),
			'manage_options',
			'calcvora-settings',
			array( $this, 'settings_page' )
		);
	}

	public function register_settings() {
		register_setting( 'calcvora_settings', 'calcvora_next_url', array( 'sanitize_callback' => 'esc_url_raw' ) );
		register_setting( 'calcvora_settings', 'calcvora_revalidate_secret', array( 'sanitize_callback' => 'sanitize_text_field' ) );
		register_setting( 'calcvora_settings', 'calcvora_delete_on_uninstall', array( 'sanitize_callback' => 'absint' ) );
	}

	public function settings_page() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}
		$export = wp_nonce_url( admin_url( 'admin-post.php?action=calcvora_export_csv' ), 'calcvora_export' );
		echo '<div class="wrap"><h1>' . esc_html__( 'Calcvora SEO Manager', 'calcvora-seo-manager' ) . '</h1>';
		echo '<form method="post" action="options.php">';
		settings_fields( 'calcvora_settings' );
		echo '<table class="form-table">';
		printf( '<tr><th>%s</th><td><input type="url" class="regular-text" name="calcvora_next_url" value="%s" placeholder="https://hscalculadora.com" /></td></tr>', esc_html__( 'Next.js site URL', 'calcvora-seo-manager' ), esc_attr( get_option( 'calcvora_next_url', 'https://hscalculadora.com' ) ) );
		printf( '<tr><th>%s</th><td><input type="text" class="regular-text" name="calcvora_revalidate_secret" value="%s" /><p class="description">%s</p></td></tr>', esc_html__( 'Revalidate secret', 'calcvora-seo-manager' ), esc_attr( get_option( 'calcvora_revalidate_secret', '' ) ), esc_html__( 'Must match REVALIDATE_SECRET in the Next.js environment.', 'calcvora-seo-manager' ) );
		printf( '<tr><th>%s</th><td><label><input type="checkbox" name="calcvora_delete_on_uninstall" value="1" %s /> %s</label></td></tr>', esc_html__( 'On uninstall', 'calcvora-seo-manager' ), checked( 1, (int) get_option( 'calcvora_delete_on_uninstall', 0 ), false ), esc_html__( 'Delete all calculator pages and data', 'calcvora-seo-manager' ) );
		echo '</table>';
		submit_button();
		echo '</form>';
		echo '<hr><h2>' . esc_html__( 'Tools', 'calcvora-seo-manager' ) . '</h2>';
		echo '<p><button type="button" class="button" id="calcvora-sync">' . esc_html__( 'Sync / Repair pages (create any missing)', 'calcvora-seo-manager' ) . '</button> <span id="calcvora-sync-status"></span></p>';
		echo '<p><a class="button" href="' . esc_url( $export ) . '">' . esc_html__( 'Export CSV', 'calcvora-seo-manager' ) . '</a></p>';
		echo '</div>';
	}

	public function export_csv() {
		if ( ! current_user_can( 'manage_options' ) || ! check_admin_referer( 'calcvora_export' ) ) {
			wp_die( 'Forbidden' );
		}
		$posts = get_posts( array( 'post_type' => CALCVORA_SEO_CPT, 'post_status' => 'any', 'posts_per_page' => -1 ) );
		header( 'Content-Type: text/csv; charset=utf-8' );
		header( 'Content-Disposition: attachment; filename=calcvora-seo-' . gmdate( 'Y-m-d' ) . '.csv' );
		$out = fopen( 'php://output', 'w' );
		fputcsv( $out, array( 'slug', 'category', 'title', 'seo_status', 'indexed', 'word_count', 'rankmath_score', 'priority', 'assignee', 'last_seo_review', 'last_synced', 'modified' ) );
		foreach ( $posts as $p ) {
			$raw = get_post_meta( $p->ID, 'is_indexed', true );
			$on  = ( '' === $raw ) ? 'no' : ( $raw ? 'yes' : 'no' );
			fputcsv(
				$out,
				array(
					get_post_meta( $p->ID, 'calc_slug', true ),
					get_post_meta( $p->ID, 'calc_category', true ),
					get_the_title( $p ),
					get_post_meta( $p->ID, 'seo_status', true ),
					$on,
					(int) get_post_meta( $p->ID, 'content_word_count', true ),
					(int) get_post_meta( $p->ID, 'rank_math_seo_score', true ),
					get_post_meta( $p->ID, 'priority', true ),
					get_post_meta( $p->ID, 'assignee', true ),
					get_post_meta( $p->ID, 'last_seo_review', true ),
					get_post_meta( $p->ID, 'last_synced', true ),
					$p->post_modified,
				)
			);
		}
		fclose( $out );
		exit;
	}
}
