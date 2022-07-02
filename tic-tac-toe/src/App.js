import './App.css';
import SquareComponent from './SquareComponent';
import { useState, useEffect } from 'react';
const initialState = ["", "", "", "", "", "", "", "", ""];
function App() {
  const [gameState, setGameState] = useState(initialState);
  const [isXChance, setIsXChance] = useState(false);

  const onSquareClick = (index) => {
    let strings = Array.from(gameState);
    strings[index] = isXChance ? "X" : "0";
    setGameState(strings);
    setIsXChance(!isXChance);
  }

  useEffect(() => {
    setTimeout(() => {
      const winner = checkWinner();
      if (winner) {
        setGameState(initialState);
        alert(`Ta da ! ${winner} won the Game !`)
      }
    }, 150);


  }, [gameState]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }

  return (
    <div className="app">
      <p className='app__header'>React Tic Tac Toe</p>
      <div className="row jc-center">
        <SquareComponent className="b-bottom-right" state={gameState[0]} onclick={() => onSquareClick(0)} />
        <SquareComponent className="b-bottom-right" state={gameState[1]} onclick={() => onSquareClick(1)} />
        <SquareComponent className="b-bottom" state={gameState[2]} onclick={() => onSquareClick(2)} />
      </div>
      <div className="row jc-center">
        <SquareComponent className="b-bottom-right" state={gameState[3]} onclick={() => onSquareClick(3)} />
        <SquareComponent className="b-bottom-right" state={gameState[4]} onclick={() => onSquareClick(4)} />
        <SquareComponent className="b-bottom" state={gameState[5]} onclick={() => onSquareClick(5)} />
      </div>
      <div className="row jc-center">
        <SquareComponent className="b-right" state={gameState[6]} onclick={() => onSquareClick(6)} />
        <SquareComponent className="b-right" state={gameState[7]} onclick={() => onSquareClick(7)} />
        <SquareComponent state={gameState[8]} onclick={() => onSquareClick(8)} />
      </div>
      <button className='clear-button' onClick={() => setGameState(initialState)}>Clear Game</button>
    </div>
  );
}

export default App;
