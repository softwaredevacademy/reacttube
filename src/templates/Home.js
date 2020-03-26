// React core
import React from 'react';

// Components
import CardGrid from '../modules/CardGrid';

function Home() {
  // Data
  const json = require("../videos.json");

  // Render
  return (
    <div className="Home">
      <div className="container">
        <h1 className="title">Recommended</h1>
        <CardGrid prop={json.videos} />
      </div>
    </div>
  )
}

export default Home;