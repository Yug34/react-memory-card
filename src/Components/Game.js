import React, { useEffect, useState } from "react";

function Game() {
  let [isLoaded, setIsLoaded] = useState(false);
  let [gameCards, setGameCards] = useState(null);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=30/")
      .then((res) => res.json())
      .then((data) => {
        setIsLoaded(true);
        let cards = data.results.map((pokemon) => <div key={pokemon.name}>{pokemon.name}</div>);
        setGameCards(cards);
      });
  }, []);

  return <div>{isLoaded? gameCards: "Loading..."}</div>;
}

export default Game;
