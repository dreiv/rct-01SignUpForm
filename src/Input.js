import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Input.css'

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
				<input
					id={this.props.id}
					autoComplete="false"
					required
					type={this.props.type}
					placeholder={this.props.placeholder}
				/>
				<label htmlFor={this.props.id} />
			</div>
		)
	}
}

Input.propTypes = propTypes
Input.defaultProps = defaultProps
