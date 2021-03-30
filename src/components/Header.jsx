// NPM Packages
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ hasLightTheme }) {
  // State
  const [query, setQuery] = useState("");

  // Properties
  const color = hasLightTheme ? "light" : "dark";
  const logo = require(`../assets/images/logo/logo-${color}.svg`);

  return (
    <header className={"Header " + color}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      {/* Semantically this can be a form, but the links neeeds to be refactor into a submit */}
      <div className="search-bar">
        <input
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Link to={"/results/" + query}>Search</Link>
      </div>
    </header>
  );
}
