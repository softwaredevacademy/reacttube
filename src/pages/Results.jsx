// NPM Packages
import React, { useState } from "react";

// Project files
import Header from "../components/Header";
import Card from "../components/Card";
import Information from "../information.json";

export default function ResultsPage({ match }) {
  // Properties
  const query = new RegExp(match.params.query, "i");
  const results = Information.filter((video) => video.title.match(query));

  // State
  const [cards, setCards] = useState(sortCards("title", results));

  // Methods
  function sortCards(key, data) {
    const sortedResults = data.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    const renderedCards = sortedResults.map((item) => (
      <Card key={item.id} prop={item} />
    ));

    return renderedCards;
  }

  return (
    <div className="ResultsPage">
      <Header hasLightTheme={true} />

      <div className="container">
        <span>Filter results by:</span>

        <button onClick={() => setCards(sortCards("title", results))}>
          Name
        </button>

        <button onClick={() => setCards(sortCards("channelName", results))}>
          Channel
        </button>
        <hr />
        <section className="grid">{cards}</section>
      </div>
    </div>
  );
}
