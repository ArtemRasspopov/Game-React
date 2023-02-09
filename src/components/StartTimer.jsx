import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGameTimer } from "../redux/slices/gameSlice";
import { theme } from "../theme";

const StartTimer = () => {
  const [time, setTime] = useState(5);
  const {avatar} = useSelector((state) => state.gameSlice)
  let startTimer = useRef(null);
  const dispatch = useDispatch()

  useEffect(() => {
    const counter = () => {
      startTimer.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    };
    counter();
  }, []);

  useEffect(() => {
    if (time < 0) {
      dispatch(setGameTimer(true))
      clearInterval(startTimer.current);
    }
  }, [time, dispatch]);

  return (
    <div
      className="game-timer"
      style={{ display: `${time < 0 ? "none" : ""}`, color : `${theme[avatar].gameTimer}`}}
    >
      {time > 0 ? <p className="game-timer_timer">{time}</p> : <p className="game-timer_timer">go</p>}
      <p>check that you use the <span>RU</span> language!</p>
    </div>
  );
};

export default StartTimer;
