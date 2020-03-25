// React core
import React, { Component } from 'react';

// Components
import CardVideo from "./CardVideo";

class CardList extends Component {
    // Data
    card = this.props.prop.map((item) =>
        <CardVideo title={item.title} description={item.description} />
    );

    // Render
    render() {
        return <ul>{this.card}</ul>
    }
}

export default CardList;