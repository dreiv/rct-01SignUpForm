import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './App.css'
import Modal from './Modal'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = { mounted: false }
	}

	componentDidMount() {
		;(() => {
			this.setState({ mounted: true })
		})()
	}

	handleSubmit = () => {
		console.log('submit')
	}

	render() {
		let child

		if (this.state.mounted) {
			child = <Modal onSubmit={this.handleSubmit} />
		}

		return (
			<div className="App">
				<ReactCSSTransitionGroup
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
				>
					{child}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}

export default App
