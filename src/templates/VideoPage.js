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
      <header className="Header dark">
        <Link to="/"><img src={require('../images/logo/logo-dark.svg')} alt="ReactTube logo" /></Link>
      </header >

      <div className="video-container">
        <video controls src={require('../videos/' + video.media + '.mp4')} />
      </div>

      <div className="body-container">
        <h1 className="title">{video.title}</h1>
        <p className="description">{video.views} views • {video.uploadDate}</p>

        <hr />

        <div className="meta-data">
          <div className="left" >
            <img className="channel-thumb" src={require('../images/channels/' + video.channelThumb + '.jpg')} alt="Channel thumbnail" />
          </div>
          <div className="right">
            <h1 className="title">{video.channelName}</h1>
            <p className="description">{video.suscribers} suscribers</p>
            <p className="description">{video.description}</p>
          </div>
        </div>

        <hr />

        <Link className="button" to="/">Back to home</Link>
      </div>
    </div>
  )
}

export default VideoPage;