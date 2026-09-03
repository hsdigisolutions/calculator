<?php
/**
 * Plugin Name:       Calcvora SEO Manager
 * Plugin URI:        https://hscalculadora.com
 * Description:        Manage SEO for every Calcvora calculator page from WordPress — RankMath meta, index toggle, editable content, JSON-LD, and an optimization tracker. Headless: exposes everything over WPGraphQL to the Next.js front end.
 * Version:           1.2.0
 * Requires at least: 6.2
 * Requires PHP:      7.4
 * Author:            HS Digital Solutions
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       calcvora-seo-manager
 * Domain Path:       /languages
 *
 * @package Calcvora_SEO_Manager
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'CALCVORA_SEO_VERSION', '1.2.0' );
define( 'CALCVORA_SEO_FILE', __FILE__ );
define( 'CALCVORA_SEO_DIR', plugin_dir_path( __FILE__ ) );
define( 'CALCVORA_SEO_URL', plugin_dir_url( __FILE__ ) );
define( 'CALCVORA_SEO_CPT', 'calculator_page' );
define( 'CALCVORA_SEO_TAX', 'calc_category' );

require_once CALCVORA_SEO_DIR . 'includes/class-calcvora-seo-manager.php';

/**
 * Activation: seed the background creation queue (never creates inline — see activator).
 */
function calcvora_seo_activate() {
	require_once CALCVORA_SEO_DIR . 'includes/class-calcvora-cpt.php';
	require_once CALCVORA_SEO_DIR . 'includes/class-calcvora-taxonomy.php';
	require_once CALCVORA_SEO_DIR . 'includes/class-calcvora-activator.php';
	Calcvora_CPT::register();
	Calcvora_Taxonomy::register();
	Calcvora_Activator::activate();
	flush_rewrite_rules();
}
register_activation_hook( __FILE__, 'calcvora_seo_activate' );

/**
 * Deactivation: clear scheduled batches.
 */
function calcvora_seo_deactivate() {
	require_once CALCVORA_SEO_DIR . 'includes/class-calcvora-deactivator.php';
	Calcvora_Deactivator::deactivate();
	flush_rewrite_rules();
}
register_deactivation_hook( __FILE__, 'calcvora_seo_deactivate' );

/**
 * Boot.
 */
function calcvora_seo_run() {
	$plugin = new Calcvora_SEO_Manager();
	$plugin->run();
}
calcvora_seo_run();
