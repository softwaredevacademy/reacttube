// NPM Packages
import React from "react";
import { Link } from "react-router-dom";

export default function Card({ information }) {
  // Properties
  const videoThumbnail = require(`../assets/images/${information.thumb}.jpg`);
  const channelThumbnail = require(`../assets/images/channels/${information.channelThumb}.jpg`);

  return (
    <article className="Card">
      <Link to={`/video/${information.id}`}>
        <img
          className="preview"
          src={videoThumbnail}
          alt={information.description}
        ></img>
      </Link>

      <div className="meta-data">
        <div className="left">
          <img
            className="channel-thumb"
            src={channelThumbnail}
            alt="Channel thumbnail"
          />
        </div>
        <div className="right">
          <h1 className="title">{information.title}</h1>
          <p className="description">{information.channelName}</p>
          <p className="description">{information.views} views</p>
        </div>
      </div>
    </article>
  );
}
