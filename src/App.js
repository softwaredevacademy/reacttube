// React core
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from './modules/Header';

// Templates
import HomePage from './templates/HomePage';
import VideoPage from './templates/VideoPage';

// Style
import './css/style.css';

class App extends Component {
	// Render
	render() {
		return (
			<Router>
				<main className="App">
					<Header />
					<Switch>
						<Route path="/" exact component={HomePage} />
						<Route path="/video/:id" component={VideoPage} />
					</Switch>
				</main>
			</Router>
		)
	};
}

export default App;