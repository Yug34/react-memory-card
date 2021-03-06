import React, {useEffect, useState} from "react";

function Card(props) {
  let [sprite, setSprite] = useState(null);
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then((data) => {
        setSprite(data.sprites.other["official-artwork"].front_default);
      });
  }, []);

  useEffect(() => {
    if(sprite) {
      console.log(sprite);
      setLoaded(true);
    }
  }, [sprite]);

  return (
      <div>
        {loaded? <img src={sprite} alt={props.name}/>: "Loading.."}
      </div>
  );
}

export default Card;
