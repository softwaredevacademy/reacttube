// React core
import React from "react";
import { Link } from "react-router-dom";

// Components
import Header from "../modules/Header";

export default function VideoPage({ match }) {
  // Data
  const information = require("../../information.json");
  const id = Number(match.params.id); // convert to number to do an exact equality comparisson
  const video = information.find((object) => object.id === id);

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
              src={require(`../../assets/images/channels/${video.channelThumb}.jpg`)}
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
