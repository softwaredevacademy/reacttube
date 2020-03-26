// React core
import React from 'react';

// Components
import Card from "./Card";

function CardGrid(props) {
    // Data
    const card = props.prop.map((item) =>
        <Card key={item.id} prop={item} />
    );

    // Render
    return <section className="CardGrid">{card}</section>
}

export default CardGrid;