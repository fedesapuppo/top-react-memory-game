import React from 'react';
import Card from './Card';

function Body({ cards, onCardClick, gameStatus }) {
  return (
    <div className="body">
      <div className={`cards-grid ${gameStatus !== 'playing' ? 'disabled' : ''}`}>
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            name={card.name}
            onClick={() => onCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;