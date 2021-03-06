import React, { useEffect, useState } from "react";
import Card from "./Card";

function Cards(props) {
  let [cardList, setCardList] = useState(null);
  useEffect(() => {
    setCardList(
      props.cardList.map((card) => (
        <Card key={card.name} name={card.name} url={card.url} />
      ))
    );
  }, []);

  return <div>{cardList ? cardList : "Loading"}</div>;
}

export default Cards;
