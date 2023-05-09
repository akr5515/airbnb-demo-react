import React from "react";
import { lists } from "../../assets/card-list";
import { CardType } from "../../types.d";
import Card from "./card";
import "./style.css";
const Cards = () => {
  return (
    <div className="cards-flex">
      {lists.map((card: CardType, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
};

export default Cards;
