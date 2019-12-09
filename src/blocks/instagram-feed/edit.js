/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import Controls from './controls';
import Inspector from './inspector';

/**
 * WordPress dependencies
 */
import { Component, Fragment } from '@wordpress/element';

/**
 * Block edit function
 */
class edit extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			currentIcon: '',
		};
	}

	componentDidUpdate( prevProps ) {
		const { attributes } = this.props;

		if (
			! this.props.isSelected &&
			prevProps.isSelected &&
			this.state.currentIcon
		) {
			this.setState( {
				currentIcon: '',
			} );
		}

		if ( prevProps.attributes.align !== attributes.align && [ 'wide', 'full' ].includes( attributes.align ) && attributes.textAlign === undefined ) {
			this.props.setAttributes( { textAlign: 'center' } );
		}
	}

	render() {
		const {
			attributes,
			className,
			isSelected,
		} = this.props;

		const {} = attributes;

		const classes = classnames( className, 'wp-block-coblocks-instagram-feed' );
		return (
			<Fragment>
				{ isSelected && <Controls { ...this.props } /> }
				{ isSelected && <Inspector { ...this.props } /> }
				<div className={ classes }>
					<p>This Block shows <strong>{ attributes.count }</strong> instagram posts distributed on <strong>{ attributes.columns }</strong> columns.</p>
				</div>
			</Fragment>
		);
	}
}

export default edit;
