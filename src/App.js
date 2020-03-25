import React, { Component } from 'react';
import CardList from './components/CardList';
import './App.css';

class App extends Component {
	data = [
		{ title: "Game Boy", description: "A video about the original handheld console." },
		{ title: "Game Boy Pocket", description: "A video about the revised console." },
		{ title: "Game Boy Color", description: "A video about the color revision." }
	]

	render() {
		return (
			<main className="App">
				<header>
					<h1>React-Tube</h1>
				</header>

				<CardList cards={this.data} />
			</main>
		)
	};
}

export default App;