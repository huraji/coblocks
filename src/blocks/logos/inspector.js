/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

class Inspector extends Component {
	getfreeScrollHelp( checked ) {
		return checked ? __( 'Black and white filtering enabled.' ) : __( 'Toggle to add a black and white filter.' );
	}

	render() {
		const {
			setAttributes,
			attributes,
		} = this.props;

		const {
			grayscale,
		} = attributes;

		return (
			<InspectorControls>
				<PanelBody
					title={ __( 'Logos Settings' ) }
				>
					<ToggleControl
						label={ __( 'Black & White' ) }
						help={ this.getfreeScrollHelp }
						checked={ grayscale }
						onChange={ () => setAttributes( { grayscale: ! grayscale } ) }
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}

export default Inspector;
