// React core
import React from 'react';
import { Link } from "react-router-dom";

function Card(props) {
	// Render
	return (
		<article className="Card">
			<Link to={'/video/' + props.prop.id}>
				<img src={require('../images/' + props.prop.media + '.jpg')} alt={props.prop.description}></img>
			</Link>
			<h1 className="title">{props.prop.title}</h1>
			<p className="description">{props.prop.author}</p>
		</article>
	)
}

export default Card;