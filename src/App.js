// React core
import React, { Component } from 'react';

// Components
import CardList from './components/CardList';
import Header from './components/Header';

// Style
import './css/style.css';

class App extends Component {
	// Data
	json = require("./json/videos.json");

	// Render
	render() {
		return (
			<main className="App">
				<Header />
				<CardList prop={this.json.videos} />
			</main>
		)
	};
}



export default App;