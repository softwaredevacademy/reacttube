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
      <div className="body-container">
        <h1 className="title">{video.title}</h1>
        <p className="author">{video.author}</p>
        <p className="description">{video.description}</p>
        <hr />
        <Link className="button" to="/">Back to home</Link>
      </div>
    </div>
  )
}

export default VideoPage;