// React core
import React, { Component } from 'react';

class CardVideo extends Component {
	// Render
	render() {
		return (
			<article className="CardVideo">
				<a href={this.props.prop.link} target="_blank">
					<img src={require('../images/' + this.props.prop.image)}></img>
				</a>
				<h1>{this.props.prop.title}</h1>
				<p>{this.props.prop.description}</p>
			</article>
		)
	}
}

export default CardVideo;