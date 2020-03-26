// React core
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from './modules/Header';

// Templates
import Home from './templates/Home';
import Video from './templates/Video';

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
						<Route path="/" exact component={Home} />
						<Route path="/video/:id" component={Video} />
					</Switch>
				</main>
			</Router>
		)
	};
}

export default App;