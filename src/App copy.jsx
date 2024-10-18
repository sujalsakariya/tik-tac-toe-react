import React, { useState } from "react";
import "./App.css";

function Square({ value, onClick }) {
  return <button className="square" onClick={onClick}>{value}</button>;
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const newSquares = squares.slice();
    newSquares[i] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="main">
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((sq, i) => <Square key={i} value={sq} onClick={() => handleClick(i)} />)}
      </div>
      <button onClick={() => setSquares(Array(9).fill(null))}>Restart</button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
