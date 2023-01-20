import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameOver from "./components/GameOver";
import HomePage from "./components/HomePage";
import Plain from "./components/Plain";
import { addPlain, setLetters } from "./redux/slices/plaintsSlice";
import { wordsData } from "./wordsData";

function App() {
  const { plains, gameOver } = useSelector((state) => state.plaintsSlice);
  const { gameStatus } = useSelector((state) => state.gameSlice);
  const dispatch = useDispatch();
  let intervalRef = useRef(null);

  useEffect(() => {
    const keyPressHandler = (e) => {
      dispatch(setLetters(e.key));
    };

    document.addEventListener("keypress", keyPressHandler);
  }, [dispatch]);

  useEffect(() => {
    const counter = () => {
      intervalRef.current = setInterval(() => {
        dispatch(addPlain());
      }, 2000);
    };
    if (gameStatus === "game") {
      counter();
    }
  }, [gameStatus, dispatch]);

  useEffect(() => {
    if (gameOver) {
      clearInterval(intervalRef.current);
    }
  }, [gameOver]);

  return (
    <div className="app">
      {gameStatus === "main" && <HomePage />}
      {gameOver && <GameOver />}
      {gameStatus === "game" && (
        <>
          {plains.map((plain, index) => (
            <Plain key={index} id={index} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
