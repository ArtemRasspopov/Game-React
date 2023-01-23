import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameOver from "./components/GameOver";
import HomePage from "./components/HomePage";
import Map from "./components/Map";
import Plain from "./components/Plain";
import { addPlain, setLetters } from "./redux/slices/gameSlice";

function App() {
  const { plains, gameOver, gameStatus } = useSelector((state) => state.gameSlice);
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
      }, (1000));
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
      <Map/>
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
