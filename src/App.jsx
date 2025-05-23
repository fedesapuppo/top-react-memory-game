import { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import './App.css'

const cardDescriptions = [
  'Bird', 'Coast', 'Wood', 'Cloud', 'Top',
  'Leaves', 'Circles', 'Street', 'Lighthouse', 'Fence',
  'Desk', 'City', 'Forest', 'Coffee', 'Girl',
  'Hair', 'Green', 'Landscape', 'Bringe', 'Rails',
  'Trees', 'Bench', 'Grass', 'Ball', 'See',
  'Grapes', 'Bike', 'Dock', 'Door', 'Mountain'
]

function App() {
  const [score, setScore] = useState(0)
  const [maxScore, setMaxScore] = useState(0)
  const [clickedCards, setClickedCards] = useState([])
  const [gameStatus, setGameStatus] = useState('playing')
  const [cards, setCards] = useState(() =>
    Array(30).fill(null).map((_, index) => ({
      id: index,
      image: `https://picsum.photos/id/${index+50}/200/300`,
      name: cardDescriptions[index]
    }))
  )

  const resetGame = () => {
    setScore(0)
    setClickedCards([])
    setGameStatus('playing')
    setCards(prevCards => [...prevCards].sort(() => Math.random() - 0.5))
  }

  const handleCardClick = (cardId) => {
    if (gameStatus !== 'playing') return

    if (clickedCards.includes(cardId)) {
      setGameStatus('lost')
      if (score > maxScore) {
        setMaxScore(score)
      }
      return
    }

    setClickedCards(prev => [...prev, cardId])
    setScore(prev => {
      const newScore = prev + 1
      if (newScore === 30) {
        setGameStatus('won')
        if (newScore > maxScore) {
          setMaxScore(newScore)
        }
      }
      return newScore
    })

    setCards(prevCards => [...prevCards].sort(() => Math.random() - 0.5))
  }

  return (
    <div className="app">
      <Header score={score} maxScore={maxScore} />
      {gameStatus !== 'playing' && (
        <div className="game-message">
          <h2>
            {gameStatus === 'won'
              ? '🎉 Congratulations! You won! 🎉'
              : '😢 Game Over! You clicked the same card twice! 😢'}
          </h2>
          <button className="reset-button" onClick={resetGame}>
            Play Again
          </button>
        </div>
      )}
      <Body
        cards={cards}
        onCardClick={handleCardClick}
        gameStatus={gameStatus}
      />
    </div>
  )
}

export default App
