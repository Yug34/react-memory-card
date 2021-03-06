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
  }, [props.cardList]);

  return <div>{cardList ? cardList : null}</div>;
}

export default Cards;
