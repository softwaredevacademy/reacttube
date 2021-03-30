// NPM Packages
import React from "react";
import { Link } from "react-router-dom";

// Project files
import Header from "../components/Header";
import Information from "../information.json";

export default function VideoPage({ match }) {
  // Data
  const id = Number(match.params.id); // convert to number to do an exact equality comparisson
  const thumbnail = require(`../assets/images/channels/${video.channelThumb}.jpg`);
  const video = Information.find((object) => object.id === id);

  // Render
  return (
    <div className="VideoPage">
      <Header hasLightTheme={false} />

      <div className="video-container">
        <video controls>
          <source src={video.videoURL} type="video/mp4" />
        </video>
      </div>

      <div className="body-container">
        <h1 className="title">{video.title}</h1>
        <p className="description">
          {video.views} views • {video.uploadDate}
        </p>

        <hr />

        <div className="meta-data">
          <div className="left">
            <img
              className="channel-thumb"
              src={thumbnail}
              alt="Channel thumbnail"
            />
          </div>
          <div className="right">
            <h1 className="title">{video.channelName}</h1>
            <p className="description">{video.suscribers} suscribers</p>
            <p className="description">{video.description}</p>
          </div>
        </div>

        <hr />

        <Link className="button" to="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}
