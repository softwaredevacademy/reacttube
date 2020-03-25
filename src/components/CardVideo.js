// React core
import React, { Component } from 'react';

class CardVideo extends Component {
	// Render
	render() {
		return (
			<a href={this.props.prop.link} target="_blank">
				<h1>{this.props.prop.title}!!!</h1>
				<p>{this.props.prop.description}</p>
			</a>
		)
	}
}

export default CardVideo;