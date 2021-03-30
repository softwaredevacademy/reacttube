// NPM Packages
import React from "react";

// Project files
import Information from "../information.json";
import Header from "../modules/Header";
import Card from "../modules/Card";

export default function HomePage() {
  // Properties
  const cards = Information.map((item) => <Card key={item.id} prop={item} />);

  return (
    <div className="HomePage">
      <Header hasLightTheme={true} />

      <div className="container">
        <h1 className="title">Recommended</h1>
        <section className="grid">{cards}</section>
      </div>
    </div>
  );
}
