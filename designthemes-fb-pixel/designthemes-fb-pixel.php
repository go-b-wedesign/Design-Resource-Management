<?php
/**
 * Plugin Name:	DesignThemes Facebook Pixel
 * Description: Facebook Pixel plugin for the DesignThemes WordPress themes.
 * Version: 1.0
 * Author: the DesignThemes team
 * Author URI: http://themeforest.net/user/designthemes
 * Text Domain: designthemes-fb-pixel
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if( !class_exists( 'DesignThemesFBPixel' ) ) {
    class DesignThemesFBPixel {

        private static $_instance = null;

        public static function instance() {
            if ( is_null( self::$_instance ) ) {
                self::$_instance = new self();
            }

            return self::$_instance;
        }

        function __construct() {
        	add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_js' ) );
        }

        function enqueue_js() {
        	wp_enqueue_script( 'dt-fbpixel-script', trailingslashit( plugin_dir_url( __FILE__ ) ) . 'script.js', array(), false, true );
        }
    }
}

if( !function_exists( 'DT_FBP' ) ) {
    function DT_FBP() {
        return DesignThemesFBPixel::instance();
    }
}

DT_FBP();