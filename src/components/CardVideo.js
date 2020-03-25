// React core
import React, { Component } from 'react';

class CardVideo extends Component {
	// Render
	render() {
		return (
			<article>
				<h1>{this.props.title}</h1>
				<p>{this.props.description}</p>
			</article>
		)
	}
}

export default CardVideo;