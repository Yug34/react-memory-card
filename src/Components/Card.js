import React, { useEffect, useState } from "react";
import "../css/Card.css";
import questionMark from "../media/images/questionMark.png";

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
      setLoaded(true);
    }
  }, [sprite]);

  return (
    <div onClick={props.clickHandler} className="pokeCard">
      {loaded ? (
        <div className="pokeMon">
          <img className="pokeSprite" src={sprite} alt={props.name}/>
          <h5 className="pokeName">{props.name}</h5>
        </div>
      ) : (
          <div className="pokeMon">
            <img className="pokeSprite" src={questionMark} alt="Who's that pokemon!"/>
            <h5 className="pokeName">Loading...</h5>
          </div>
      )}
    </div>
  );
}

export default Card;
