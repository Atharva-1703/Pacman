import HomePage from './HomePage'
import "./App.css"
import GamePage from './GamePage'
import { useState } from 'react'
function App() {
  const [startGame,setStartGame]=useState(false)
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-black">
      {startGame ? <GamePage /> : <HomePage setStartGame={setStartGame} />}
    </div>
  )
}

export default App
