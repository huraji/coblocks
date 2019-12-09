/**
 * External dependencies
 */
import { escape } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import {
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	TextControl,
} from '@wordpress/components';

/**
 * Inspector controls
 */
class Inspector extends Component {
	render() {
		const {
			attributes,
			setAttributes,
		} = this.props;

		const {
			columns,
			count,
			token,
		} = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Feed Settings', 'coblocks' ) } initialOpen={ true }>
						<div className="components-feed-settings">
							<TextControl
								label="Token"
								value={ token }
								onChange={ value => setAttributes( { token: escape( value ) } ) }
							/>
							<RangeControl
								label={ __( 'Count of posts', 'coblocks' ) }
								value={ count }
								onChange={ value => setAttributes( { count: value } ) }
								min={ 1 }
								max={ 12 }
							/>
							<RangeControl
								label={ __( 'Number of Columns', 'coblocks' ) }
								value={ columns }
								onChange={ value => setAttributes( { columns: value } ) }
								min={ 1 }
								max={ 12 }
							/>
						</div>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;
