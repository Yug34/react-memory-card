import React, { useEffect, useState } from "react";
import "../css/Card.css";

function Card(props) {
  let [sprite, setSprite] = useState(null);
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then((data) => {
        setSprite(data.sprites.other["official-artwork"].front_default);
      });
  });

  useEffect(() => {
    if (sprite) {
      console.log(sprite);
      setLoaded(true);
    }
  }, [sprite]);

  return (
    <div className="pokeCard">
      {loaded ? (
        <div className="pokeMon">
          <img className="pokeSprite" src={sprite} alt={props.name}/>
          <h5 className="pokeName">{props.name}</h5>
        </div>
      ) : (
        "Loading.."
      )}
    </div>
  );
}

export default Card;
