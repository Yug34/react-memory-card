import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import getRandom from "../Helpers/getRandom";

function Game() {
  let [gameCards, setGameCards] = useState(null);
  let [cardList, setCardList] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=30/")
      .then((res) => res.json())
      .then((data) => {
        setGameCards(data.results);
      });
  }, []);

  useEffect(() => {
    if (gameCards) {
      setCardList(getRandom(gameCards, 10));
    }
  }, [gameCards]);

  return (<div>{cardList ? <Cards cardList={cardList}/> : "Loading..."}</div>);
}

export default Game;
