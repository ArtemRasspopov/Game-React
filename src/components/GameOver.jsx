import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setgameStatus } from "../redux/slices/gameSlice";
import { resetGame } from "../redux/slices/gameSlice";
import { theme } from "../theme";

const GameOver = () => {
  const dispatch = useDispatch();
  const { score } = useSelector((state) => state.gameSlice);

  const backToMenuHandler = () => {
    dispatch(setgameStatus("main"));
    dispatch(resetGame());
  };

  return (
    <div className="gameOver">
      <p style={{ backgroundColor: theme.gameOverTitle }}>Game Over</p>
      <p
        className="score gameOver__score"
        style={{ color: "#bababa"}}
      >
        SCORE : <span style={{ color: "white" }}>{score}</span>
      </p>

      <button
        className="gameOver__button button"
        onClick={() => backToMenuHandler()}
      >
        Repeat
      </button>
      <button
        className="gameOver__button button"
        onClick={() => backToMenuHandler()}
      >
        Back to menu
      </button>
    </div>
  );
};

export default GameOver;
