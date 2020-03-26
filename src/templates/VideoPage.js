// React core
import React from 'react';
import { Link } from "react-router-dom";

function VideoPage({ match }) {
  // Data
  // Data
  const json = require("../videos.json");
  const id = match.params.id;
  const video = json.videos.find(object => object.id == id);

  // Render
  return (
    <div className="VideoPage">
      <div className="video-container">
        <video controls src={require('../videos/' + video.video)} />
      </div>
      <h1>{video.title}</h1>
      <p>{video.description}</p>
      <hr />
      <Link to="/">Back to home</Link>
    </div>
  )
}

export default VideoPage;