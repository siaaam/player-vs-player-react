import { useState } from 'react';
import { useEffect } from 'react/cjs/react.production.min';

import './App.css';

function App() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player1Disable, setPlayer1Disable] = useState(false);
  const [player2Score, setPlayer2Score] = useState(0);
  const [player2Disable, setPlayer2Disable] = useState(false);
  const [disable, setDisable] = useState(' ');

  const winningScore = 10;

  const player1ScoreUpdater = () => {
    const random = Math.floor(Math.random() * (winningScore + 1));
    setPlayer1Score(random);
    setPlayer1Disable(true);
    setPlayer2Disable(false);
    if (isP1win || isP2win) {
      setDisable('disable');
    }
  };
  const player2ScoreUpdater = () => {
    const random = Math.floor(Math.random() * (winningScore + 1));
    setPlayer2Score(random);
    setPlayer2Disable(true);
    setPlayer1Disable(false);
    if (isP1win || isP2win) {
      setDisable('disable');
    }
  };

  const resetHandler = () => {
    setPlayer1Score(0);
    setPlayer1Disable(false);
    setPlayer2Score(0);
    setPlayer2Disable(false);
    setDisable(' ');
  };

  // disable handling
  const disableClassp1 = player1Disable ? 'disable' : ' ';
  const disableClassp2 = player2Disable ? 'disable' : ' ';

  const isP1win = winningScore === player1Score;
  const isP2win = winningScore === player2Score;

  console.log(disable);

  return (
    <div className="App">
      <h1>Player Vs Player</h1>
      <h3>winning score : {winningScore}</h3>
      <h4>player - 1 : {player1Score} </h4>
      <h4>player - 2 : {player2Score} </h4>

      {isP1win && <p> p1 winner</p>}
      {isP2win && <p> p2 winner</p>}

      <button
        className={`${disableClassp1} ${disable}`}
        onClick={player1ScoreUpdater}
      >
        player 1
      </button>
      <br />
      <button
        className={`${disableClassp2}  ${disable}`}
        onClick={player2ScoreUpdater}
      >
        player 2
      </button>
      <br />
      <button onClick={resetHandler}>reset</button>
    </div>
  );
}

export default App;
