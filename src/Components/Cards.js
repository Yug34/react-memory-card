import React, { useEffect, useState } from "react";
import Card from "./Card";
import getRandom from "../Helpers/getRandom";


function Cards(props) {
  let [cardList, setCardList] = useState(null);
  let [cards, setCards] = useState(null);

  function cardClick(e) {
    e.preventDefault();

    console.log(cards);

    if(cards) {
      setCards(getRandom(props.cardList, 10));
    }
  }

  useEffect(() => {
    if(cards) {
      setCardList(
          cards.map((card) => (
              <Card key={card.name} name={card.name} url={card.url} clickHandler={e => cardClick(e)}/>
          ))
      );
    }
  }, [cards]);

  useEffect(() => {
    setCardList(
      props.cardList.map((card) => (
        <Card key={card.name} name={card.name} url={card.url} clickHandler={e => cardClick(e)}/>
      ))
    );

    setCards(props.cardList);
  }, [props.cardList]);

  return <div>{cardList ? cardList : null}</div>;
}

export default Cards;
