import React, { Component } from 'react';
import CardVideo from "./CardVideo";

class CardList extends React.Component {
    items = this.props.cards;
    list = this.items.map((item) =>
        <CardVideo title={item.title} description={item.description} />
    );

    render() {
        return <ul>{this.list}</ul>
    }
}

export default CardList;