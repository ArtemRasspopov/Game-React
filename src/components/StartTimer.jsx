import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { theme } from "../theme";

const StartTimer = () => {
  const [time, setTime] = useState(5);
  const {avatar} = useSelector((state) => state.gameSlice)
  let startTimer = useRef(null);

  useEffect(() => {
    const counter = () => {
      startTimer.current = setInterval(() => {
        setTime((prev) => prev - 1);
        console.log("timer");
      }, 1000);
    };
    counter();
  }, []);

  useEffect(() => {
    if (time < 0) {
      console.log("start");
      clearInterval(startTimer.current);
    }
  }, [time]);

  return (
    <div
      className="game-timer"
      style={{ display: `${time < 0 ? "none" : ""}`, color : `${theme[avatar].gameTimer}`}}
    >
      {time > 0 ? <span>{time}</span> : <span>go</span>}
      <p>check that you use the RU language</p>
    </div>
  );
};

export default StartTimer;
