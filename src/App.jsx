import { useState, useEffect } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import './App.css'

function App() {
  const [score, setScore] = useState(0)
  const [maxScore, setMaxScore] = useState(0)
  const [clickedCards, setClickedCards] = useState([])
  const [gameStatus, setGameStatus] = useState('playing') // 'playing', 'won', 'lost'
  const [cards, setCards] = useState([])

  // Initialize cards with unique images
  useEffect(() => {
    const initialCards = Array(30).fill(null).map((_, index) => ({
      id: index,
      image: `https://picsum.photos/200/300?random=${index}`,
      name: `Card ${index + 1}`
    }))
    setCards(initialCards)
  }, [])

  const resetGame = () => {
    setScore(0)
    setClickedCards([])
    setGameStatus('playing')
    // Shuffle cards
    setCards(prevCards => [...prevCards].sort(() => Math.random() - 0.5))
  }

  const handleCardClick = (cardId) => {
    if (gameStatus !== 'playing') return

    // Check if card was already clicked
    if (clickedCards.includes(cardId)) {
      setGameStatus('lost')
      if (score > maxScore) {
        setMaxScore(score)
      }
      return
    }

    // Add card to clicked cards and increment score
    setClickedCards(prev => [...prev, cardId])
    setScore(prev => {
      const newScore = prev + 1
      // Check for win condition
      if (newScore === 30) {
        setGameStatus('won')
        if (newScore > maxScore) {
          setMaxScore(newScore)
        }
      }
      return newScore
    })

    // Shuffle cards after each click
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
