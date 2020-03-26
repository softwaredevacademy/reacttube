// React core
import React from 'react';

// Components
import CardList from '../modules/CardList';

function Home() {
  // Data
  const json = require("../json/videos.json");

  // Render
  return (
    <div className="Home">
      <h1 className="title">Recommended</h1>
      <CardList prop={json.videos} />
    </div>
  )
}

export default Home;