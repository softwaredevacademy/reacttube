// React core
import React, { Component } from 'react';

// Components
import CardVideo from "./CardVideo";

class CardList extends Component {
    // Data
    card = this.props.prop.map((item) =>
        <CardVideo prop={item}/>
    );

    // Render
    render() {
        return <ul>{this.card}</ul>
    }
}

export default CardList;