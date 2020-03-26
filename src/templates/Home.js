// React core
import React from 'react';

// Components
import CardList from '../modules/CardList';

function Home() {
  // Data
  const json = require("../videos.json");

  // Render
  return (
    <div className="Home">
      <div className="container">
        <h1 className="title">Recommended</h1>
        <CardList prop={json.videos} />
      </div>
    </div>
  )
}

export default Home;