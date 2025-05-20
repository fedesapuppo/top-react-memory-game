import React from 'react';
import Card from './Card';

function Body({ cards, onCardClick }) {
  return (
    <div className="body">
      <div className="cards-grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            name={card.name}
            onClick={() => onCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;