<?php
/**
 * Server-side rendering of the `coblocks/instagram-feed` block.
 *
 * @package CoBlocks
 */

 /**
  * Get get instagram feed
  * @param string $token (5568708653.1677ed0.24f06f8fa9834e959ae32f4e6b4c1c29)
  * @param int $count (posts to retrieve in feed, default 4)
  * @param int $hours (time to refresh the feed, default 24)
  * @return array $feed (queried last instagram posts)
  */
function coblocks_get_instagram_feed( $token, int $count = 4 )
{
	$token = trim( $token );
	$feed = false;
	if ( !empty( $token ) ) {
		$response = json_decode( file_get_contents("https://api.instagram.com/v1/users/self/media/recent/?access_token={$token}&count={$count}"));
		if ( is_array( $response->data ) ) {
			$feed = $response->data;
		}
	}
	return $feed;
}

/**
 * Renders the block on server.
 *
 * @param array $attributes The block attributes.
 *
 * @return string Returns the block content.
 */
function coblocks_render_instagram_feed_block( $attributes ) {

	// Start markup.
	$markup = '';
	$photos = coblocks_get_instagram_feed( $attributes['token'], $attributes['count'] );
	if ( is_array( $photos ) ) {
		$col = $attributes['columns'] > 1 ? ( 100 / $attributes['columns'] ) - 0.5 : 100;
		foreach ( $photos as $photo ) {
			$markup .= '<div class="instagram-entry" style="flex-basis:' . $col . '%">
				<a href="' . $photo->link . '" class="wp-block-instagram__link wp-block-coblocks-instagram">
					<img src="' . $photo->images->standard_resolution->url . '" alt="' . $photo->caption->text . '" />
				</a>
			</div>';
		}
	}

	// Build classes.
	$class = 'wp-block-coblocks-instagram-feed instagram-entries';

	if ( isset( $attributes['className'] ) ) {
		$class .= ' ' . $attributes['className'];
	}

	// Render block content.
	$block_content = sprintf(
		'<div class="%1$s">%2$s</div>',
		esc_attr( $class ),
		$markup
	);
	
	return $block_content;
}

/**
 * Registers the block on server.
 */
function coblocks_register_instagram_feed_block() {
	// Return early if this function does not exist.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	// Load attributes from block.json.
	ob_start();
	include COBLOCKS_PLUGIN_DIR . 'src/blocks/instagram-feed/block.json';
	$metadata = json_decode( ob_get_clean(), true );

	register_block_type(
		'coblocks/instagram-feed',
		array(
			'editor_script'   => 'coblocks-editor',
			'editor_style'    => 'coblocks-editor',
			'style'           => 'coblocks-frontend',
			'attributes'      => $metadata['attributes'],
			'render_callback' => 'coblocks_render_instagram_feed_block',
		)
	);
}
add_action( 'init', 'coblocks_register_instagram_feed_block' );