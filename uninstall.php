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

$SETTINGS_API = 'coblocks_settings_api';

if ( get_option($SETTINGS_API) === true ) {
    delete_option($SETTINGS_API);

    if ( function_exists( 'is_multisite' ) && is_multisite() ) { 
        // for site options in Multisite
        delete_site_option($SETTINGS_API);
        }
}



unset($SETTINGS_API);
?>