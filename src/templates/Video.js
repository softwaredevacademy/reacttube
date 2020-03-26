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
      <video controls width="640" height="360" src={require('../videos/' + video.video)} />
      <h1>{video.title}</h1>
      <p>{video.description}</p>
      <hr />
      <Link to="/">Back to home</Link>
    </div>
  )
}

export default VideoPage;