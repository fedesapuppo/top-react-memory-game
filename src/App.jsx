import { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import './App.css'

function App() {
  const [score, setScore] = useState(0)
  const [maxScore, setMaxScore] = useState(0)

  const cards = Array(30).fill(null).map((_, index) => ({
    image: `https://picsum.photos/200/300?random=${index}`,
    name: `Card ${index + 1}`
  }))

  const handleCardClick = (index) => {
    console.log(`Card ${index} clicked`)
  }

  return (
    <div className="app">
      <Header score={score} maxScore={maxScore} />
      <Body cards={cards} onCardClick={handleCardClick} />
    </div>
  )
}

export default App
