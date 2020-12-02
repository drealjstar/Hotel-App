import React, { Component } from "react";
import MovingText from "./movingtext";
import "./card.css";

class Card extends Component {
  render() {
    const prices = [
      {
        time: "Par Hour",
        amount: 10,
      },

      {
        time: "12 Hours",
        amount: 150,
      },

      {
        time: "24 Hours",
        amount: 300,
      },
    ];

    return (
      <div>
        <div className="flip-card-wrap">
          {prices.map((price) => {
            return (
              <div className="flip-card-inner">
                <div className="card-front">
                  <h1>TO LODGE</h1>
                  <h2>Roll Over For</h2>
                  <h2>Price</h2>
                  <h2>In</h2>
                  <h1>Dollar</h1>
                </div>
                <div className="card-back">
                  <h2>{price.time}</h2>
                  <p> {price.amount}</p>
                </div>
              </div>
            );
          })}
        </div>

        <MovingText />
      </div>
    );
  }
}

export default Card;
