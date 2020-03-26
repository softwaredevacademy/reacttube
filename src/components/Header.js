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
		<header>
			<h1><Link style={linkStyle} to="/">React-Tube</Link></h1>
		</header >
	)
}

export default Header;