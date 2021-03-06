import React, { useEffect, useState } from "react";
import Cards from "./Cards";

function getRandom(arr, n) {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    let x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

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
