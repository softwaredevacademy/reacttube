// React core
import React from 'react';
import { Link } from "react-router-dom";

function Video({ match }) {
  // Data
  // Data
  const json = require("../json/videos.json");
  const id = match.params.id;
  const video = json.videos.find(object => object.id == id);

  // Render
  return (
    <div className="Video">
      <h1>{video.title}</h1>
      <p>{video.description}</p>

      <video width="320" height="180" src={video.video} />
      <video width="320" height="180" >
        <source src={video.video} />
      </video>

      <Link to="/">Back to home</Link>
    </div>
  )
}

export default Video;