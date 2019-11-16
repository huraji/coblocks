/**
 * Internal dependencies
 */
import { BackgroundControls } from '../../../components/background';

/**
 * WordPress dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { AlignmentToolbar, BlockControls, BlockVerticalAlignmentToolbar } from '@wordpress/block-editor';

class Controls extends Component {
	render() {
		const {
			attributes,
			setAttributes,
		} = this.props;

		const {
			contentAlign,
			verticalAlignment,
		} = attributes;

		return (
			<Fragment>
				<BlockControls>
					<BlockVerticalAlignmentToolbar
						onChange={ ( verticalAlignment ) => setAttributes( { verticalAlignment: verticalAlignment } ) }
						value={ verticalAlignment }
					/>
					<AlignmentToolbar
						value={ contentAlign }
						onChange={ ( nextContentAlign ) => setAttributes( { contentAlign: nextContentAlign } ) }
					/>
					{ BackgroundControls( this.props ) }
				</BlockControls>
			</Fragment>
		);
	}
}

export default Controls;
