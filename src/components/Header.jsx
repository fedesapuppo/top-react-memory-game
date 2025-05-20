import React from 'react';

function Header({ score, maxScore }) {
  return (
    <header className="header">
      <h1>Memory Game</h1>
      <div className="instructions">
        <p>Click on a card to start the game. Don't click on the same card twice!</p>
      </div>
      <div className="score-container">
        <div className="score">
          <span>Score: {score}</span>
        </div>
        <div className="max-score">
          <span>Best Score: {maxScore}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;