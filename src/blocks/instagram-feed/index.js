/**
 * Styles.
 */
import './styles/editor.scss';
import './styles/style.scss';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';

/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';

/**
 * Block constants
 */
const { name, category, attributes } = metadata;

const settings = {
	title: __( 'Instagram Feed', 'coblocks' ),
	description: sprintf( __( 'Add latest posts from your Instagram Account in a grid format. Get your instagram token at %1$s.', 'coblocks' ), 'https://instagram.pixelunion.net/' ),
	icon: 'instagram',
	keywords: [
		'coblocks',
		__( 'instagram', 'coblocks' ),
		__( 'feed', 'coblocks' ),
		__( 'gallery', 'coblocks' ),
	],
	attributes,
	supports: {
		coBlocksSpacing: true,
	},
	edit,
	save() {
		return null;
	},
};

export { name, category, settings };
