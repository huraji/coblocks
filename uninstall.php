<?php
/**
 * Run on plugin uninstall.
 *
 * @package CoBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// if uninstall.php is not called by WordPress, die.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	die;
}

$coblocks_options = array(
	'coblocks_settings_api',
	'coblocks_date_installed',
	'coblocks_plugin_feedback_activation_date',
	'coblocks_plugin_feedback_no_bug',
);

foreach ( $coblocks_options as $option_name ) {
	if ( get_option( $option_name ) === true ) {
		if ( function_exists( 'is_multisite' ) && is_multisite() ) {
			// for site options in Multisite.
			delete_site_option( $option_name );
		} else {
			delete_option( $option_name );
		}
	}
}

unset( $coblocks_options );
