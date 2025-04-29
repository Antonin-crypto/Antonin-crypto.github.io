// src/GameCard.js
import React from "react";
import "./GameCard.css";
import gameImage from "../src/images/jeux.png";
import gameImagekenny from "../src/images/jeux2.png";

function GameCard() {
  return (
    <div className="game-cards-container">
      <div className="game-card">
        <img src={gameImage} alt="The Beggar King" className="game-image" />
        <div className="game-info">
          <h2 className="game-title">The Beggar King</h2>
          <p className="game-dev">By Antonin</p>
          <span className="game-tag">Platformer</span>
        </div>
      </div>

      <div className="game-card">
        <img
          src={gameImagekenny}
          alt="The Beggar King"
          className="game-image"
        />
        <div className="game-info">
          <h2 className="game-title">Kennyplatformer</h2>
          <p className="game-dev">By Antonin</p>
          <span className="game-tag">Platformer</span>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
