// React core
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
	// Style
	linkStyle = {
		'color': 'red',
		'text-decoration': 'none'
	}

	// Render
	render() {
		return (
			<header>
				<h1>React-Tube</h1>
				<nav>
					<ul>
						<li><Link style={this.linkStyle} to="/">Home</Link></li>
						<li><Link style={this.linkStyle} to="/video">Video</Link></li>
					</ul>
				</nav>
			</header>
		)
	}
}

export default Header;