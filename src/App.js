// React core
import React, { Component } from 'react';

// Components
import CardList from './components/CardList';
import Header from './components/Header';

// Style
import './css/style.css';

class App extends Component {
	// Data
	videos = [
		{ title: "Game Boy", description: "A video about the original handheld console." },
		{ title: "Game Boy Pocket", description: "A video about the revised console." },
		{ title: "Game Boy Color", description: "A video about the color revision." }
	]

	// Render
	render() {
		return (
			<main className="App">
				<Header />
				<CardList prop={this.videos} />
			</main>
		)
	};
}

export default App;