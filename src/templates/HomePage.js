// React core
import React from 'react';
import { Link } from "react-router-dom";

// Components
import CardGrid from '../modules/CardGrid';

function HomePage() {
  // Data
  const json = require("../videos.json");

  // Render
  return (
    <div className="HomePage">
      <header className="Header light">
        <Link to="/"><img src={require('../images/logo-light.svg')} alt="ReactTube logo" /></Link>
      </header >

      <div className="container">
        <h1 className="title">Recommended</h1>
        <CardGrid prop={json.videos} />
      </div>
    </div>
  )
}

export default HomePage;