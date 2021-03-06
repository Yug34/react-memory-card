import React, { useEffect, useState } from "react";
import Card from "./Card";
import getRandom from "../Helpers/getRandom";
import "../css/Cards.css";


function Cards(props) {
  let [cardList, setCardList] = useState(null);
  let [cards, setCards] = useState(null);
  let [clickedCards, setClickedCards] = useState([]);
  let [score, setScore] = useState(0);

  function cardClick(e, cardName) {
    e.preventDefault();

    if(clickedCards.includes(cardName)) {
      setScore(0);
      setClickedCards([]);
    } else {
      setScore(score+1);

      let clicked = clickedCards;
      clicked.push(cardName);
      setClickedCards(clicked);
    }

    if(cards) {
      setCards(getRandom(props.cardList, 10));
    }
  }

  useEffect(() => {
    if(cards) {
      setCardList(
          cards.map((card) => (
              <Card key={card.name} name={card.name} url={card.url} clickHandler={e => cardClick(e, card.name)}/>
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

  return (
      <div className="cardsContainer">
        {score===10? "You won!": null}
        <h1>{score}/10</h1>
        {cardList ? cardList : null}
      </div>);
}

export default Cards;
