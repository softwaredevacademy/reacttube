// React core
import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
	const prop = props.prop

	// Render
	return (
		<article className='Card'>
			<Link to={'/video/' + prop.id}>
				<img className='preview' src={require(`../../assets/images/${prop.media}.jpg`)} alt={prop.description}></img>
			</Link>

			<div className='meta-data'>
				<div className='left' >
					<img className='channel-thumb' src={require(`../../assets/images/channels/${prop.channelThumb}.jpg`)} alt='Channel thumbnail' />
				</div>
				<div className='right'>
					<h1 className='title'>{prop.title}</h1>
					<p className='description'>{prop.channelName}</p>
					<p className='description'>{prop.views} views</p>
				</div>
			</div>
		</article>
	)
}