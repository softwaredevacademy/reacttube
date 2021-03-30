// NPM Packages
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Project files
import Home from "./pages/Home";
import Results from "./pages/Results";
import Video from "./pages/Video";
import "./style/style.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/results/:query" component={Results} />
          <Route path="/video/:id" component={Video} />
        </Switch>
      </Router>
    </div>
  );
}
