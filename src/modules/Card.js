// React core
import React from 'react';
import { Link } from "react-router-dom";

function Card(props) {
	// Render
	return (
		<article className="Card">
			<Link to={'/video/' + props.prop.id}>
				<img src={require('../images/' + props.prop.image)} alt={props.prop.description}></img>
			</Link>
			<h1>{props.prop.title}</h1>
			<p>{props.prop.author}</p>
		</article>
	)
}

export default Card;