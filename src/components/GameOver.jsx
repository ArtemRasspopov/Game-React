import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setgameStatus } from "../redux/slices/gameSlice";
import { resetGame } from "../redux/slices/gameSlice";

const GameOver = () => {
  const dispatch = useDispatch()
  const {score} = useSelector((state) => state.gameSlice)

  const backToMenuHandler = () => {
    dispatch(setgameStatus('main'))
    dispatch(resetGame())
  }

  return (
    <div className="gameOver">
      <span>Game Over</span>
      <div className="score">score : {score}</div>
      <button className="gameOver__button button" onClick={() => backToMenuHandler()}>Back to menu</button>
    </div>
  );
};

export default GameOver;
