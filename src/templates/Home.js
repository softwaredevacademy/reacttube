// React core
import React from 'react';

// Components
import CardList from '../components/CardList';

function Home() {
  // Data
  const json = require("../json/videos.json");

  // Render
  return (
    <div className="Home">
      <CardList prop={json.videos} />
    </div>
  )
}

export default Home;