import React from "react";
import './Card.css';

const Card = props => {
  const { friend } = props;
  console.log("Card friend", friend);
  const { name } = friend;
  return (
    <div class="scene scene--card">
      <div class="card">
        <div class="card__face card__face--front">front</div>
        <div class="card__face card__face--back">back</div>
      </div>
    </div>
  );
};

export default Card;
