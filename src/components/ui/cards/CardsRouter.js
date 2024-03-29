import React, { useEffect, useState } from "react";
import cardsData from "api/cards";
import HomeCard from "./HomeCard";
import FoodCard from "./FoodCard";
import BigCard from "./BigCard";
import WaterCard from "./WaterCard";

export default function Cards({ foodCard, homeCard, bigCard, waterCard }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (
    <div className=" mt-5 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-4 pb-10 ">
      {cards.length &&
        homeCard === true &&
        cards.map((card, index) => <HomeCard key={index} card={card} />)}

      {cards.length &&
        foodCard === true &&
        cards.map((card, index) => <FoodCard key={index} card={card} />)}
      {cards.length &&
        bigCard === true &&
        cards.map((card, index) => <BigCard key={index} card={card} />)}
      {cards.length &&
        waterCard === true &&
        cards.map((card, index) => <WaterCard key={index} card={card} />)}
    </div>
  );
}
