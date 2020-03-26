// React core
import React from 'react';
import { Link } from "react-router-dom";

function Header() {
	// Style
	const linkStyle = {
		color: 'red',
		textDecoration: 'none'
	}

	// Render
	return (
		<header className="Header">
			<Link style={linkStyle} to="/"><img src={require('../images/logo.svg')} alt="React-Tube logo" /></Link>
		</header >
	)
}

export default Header;