import React, { useState } from 'react'
import './App.css'
const App = () => {
  let [btn, setbtn] = useState(Array(9).fill(''))
  let [trun, setTurn] = useState('X')
  let [winner, setWinner] = useState("")
  function checkBTN(index) {
    let btnCopy = [...btn]
    if (btnCopy[index] === "" && winner === "") {
      let turnCopy = trun
      setTurn(turnCopy === 'X' ? 'O' : 'X')
      btnCopy[index] = trun
      setbtn(btnCopy)
      winnerCheck(btnCopy)

    }
  }

  function winnerCheck(btns) {
    let probability = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ]

    // eslint-disable-next-line array-callback-return
    probability.map(el => {
      let [a, b, c] = el
      if (btns[a] && btns[a] === btns[b] && btns[a] === btns[c]) {
        setWinner(btns[a]);

      } else {
        let btnCheckEmpty = btns.every(el => el !== '')
        if (btnCheckEmpty) {
          setWinner("Draw")
        }
      }
    })
  }


  return (
    <div className="main">
      <div className="box">
        <h1 style={{ display: 'flex', justifyContent: 'center',color:'white' }}>Winner is {winner}</h1>
        <div className="board">
          {
            btn.map((el, i) => {
              return <button key={i} onClick={() => checkBTN(i)}>{el}</button>
            })
          }
        </div>
        <button onClick={() => {
          setbtn(Array(9).fill(''))
          setWinner('')
        }}>reset</button>
      </div>
    </div>
  )
}

export default App