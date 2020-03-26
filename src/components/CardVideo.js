// React core
import React from 'react';
import { Link } from "react-router-dom";

function CardVideo(props) {
	// Render
	return (
		<article className="CardVideo">
			<Link to={'/video/' + props.prop.id}>
				<img src={require('../images/' + props.prop.image)} alt={props.prop.description}></img>
			</Link>
			<h1>{props.prop.title}</h1>
			<p>{props.prop.description}</p>
		</article>
	)
}

export default CardVideo;