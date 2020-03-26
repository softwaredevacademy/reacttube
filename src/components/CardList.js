// React core
import React from 'react';

// Components
import CardVideo from "./CardVideo";

function CardList(props) {
    // Data
    const card = props.prop.map((item) =>
        <CardVideo key={item.id} prop={item} />
    );

    // Render
    return <ul>{card}</ul>

}

export default CardList;