// React core
import React, { Component } from 'react';

// Components
import CardVideo from "./CardVideo";

class CardList extends Component {
    // Data
    cards = this.props.cards;
    list = this.cards.map((item) =>
        <CardVideo title={item.title} description={item.description} />
    );

    // Render
    render() {
        return <ul>{this.list}</ul>
    }
}

export default CardList;