// React core
import React, { Component } from 'react';

// Components
import CardList from '../components/CardList';

class Home extends Component {
  // Data
  json = require("../json/videos.json");

  // Render
  render() {
    return (
      <div className="Home">
        <CardList prop={this.json.videos} />
      </div>
    )
  }
}

export default Home;