// React core
import React from 'react';

// Components
import CardGrid from '../modules/CardGrid';

function HomePage() {
  // Data
  const json = require("../videos.json");

  // Render
  return (
    <div className="HomePage">
      <div className="container">
        <h1 className="title">Recommended</h1>
        <CardGrid prop={json.videos} />
      </div>
    </div>
  )
}

export default HomePage;