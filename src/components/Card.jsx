// NPM Packages
import React from "react";
import { Link } from "react-router-dom";

export default function Card({ information }) {
  // Properties
  const videoThumb = require(`../assets/images/${information.thumb}`);
  const channelThumb = require(`../assets/images/channels/${information.channelThumb}`);
  console.log("channelThumb", videoThumb);

  return (
    <article className="Card">
      <Link to={`/video/${information.id}`}>
        <img
          className="preview"
          src={videoThumb}
          alt={information.description}
        />
      </Link>

      <div className="meta-data">
        <div className="left">
          <img
            className="channel-thumb"
            src={channelThumb}
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
