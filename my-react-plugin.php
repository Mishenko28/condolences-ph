<?php
/**
 * Plugin Name: Condolences React Dashboard
 */

function my_react_plugin_scripts() {

    wp_enqueue_script(
        'my-react-app',
        plugin_dir_url(__FILE__) . 'react/dist/assets/index.js',
        array(),
        null,
        true
    );

    wp_enqueue_style(
        'my-react-style',
        plugin_dir_url(__FILE__) . 'react/dist/assets/index.css'
    );
}

add_action('wp_enqueue_scripts', 'my_react_plugin_scripts');

function my_react_shortcode() {
    return '<div id="condolences-react-dashboard"></div>';
}

add_shortcode('condolences-react-dashboard', 'my_react_shortcode');