// React core
import React from 'react';
import { Link } from "react-router-dom";

function Video({ match }) {
  // Data
  console.log(match);

  // Render
  return (
    <div className="Video">
      <h1>Video page</h1>
      <p>Video name goes here...</p>
      <Link to="/">Back to home</Link>
    </div>
  )
}

export default Video;