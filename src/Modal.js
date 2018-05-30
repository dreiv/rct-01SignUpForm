import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'

const propTypes = {
	onSubmit: PropTypes.func,
}

const defaultProps = {
	onSubmit: null,
}

export default class Modal extends Component {
	render() {
		return (
			<div className="Modal">
				<form onSubmit={this.props.onSubmit} className="ModalForm">
					<Input id="name" type="text" placeholder="Jack-Edward Oliver" />
					<Input
						id="username"
						type="email"
						placeholder="mrjackolai@gmail.com"
					/>
					<Input id="password" type="password" placeholder="password" />
					<button>Log in</button>
				</form>
			</div>
		)
	}
}

Modal.propTypes = propTypes
Modal.defaultProps = defaultProps
