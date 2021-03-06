import React from "react";
import Card from "./Card";

function Cards(props) {
    // let cards = props.cards.map((card) => <Card name={card.name}/>);

    return <div>{props.cards}</div>;
}

export default Cards;
