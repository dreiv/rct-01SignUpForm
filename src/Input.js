import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
	id: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
}

const defaultProps = {
	id: '',
	type: '',
	placeholder: '',
}

export default class Input extends Component {
	render() {
		return (
			<div className="Input">
				<label htmlFor={this.props.id}>
					{`${this.props.id}: `}
					<input
						id={this.props.id}
						autoComplete="false"
						required
						type={this.props.type}
						placeholder={this.props.placeholder}
					/>
				</label>
			</div>
		)
	}
}

Input.propTypes = propTypes
Input.defaultProps = defaultProps
