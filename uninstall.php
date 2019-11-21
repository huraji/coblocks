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

// if uninstall.php is not called by WordPress, die
if (!defined('WP_UNINSTALL_PLUGIN')) {
    die;
}

$__options = array(
	'coblocks_settings_api',
);

foreach ( $__options as $option_name ) {
	if ( get_option( $option_name ) === true ) {
        if ( function_exists( 'is_multisite' ) && is_multisite() ) { 
            // for site options in Multisite
            delete_site_option( $option_name );
        } else {
                delete_option( $option_name );
        }
    }
}

unset( $__options );
?>