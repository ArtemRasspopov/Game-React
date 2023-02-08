import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameOver from "./components/GameOver";
import HomePage from "./components/HomePage";
import Manual from "./components/Manual";
import Map from "./components/Map";
import Plain from "./components/Plain";
import StartTimer from "./components/StartTimer";
import WidthWarning from "./components/WidthWarning";
import { addPlain, setLetters } from "./redux/slices/gameSlice";

function App() {
  const { manual, plains, gameOver, gameStatus, complexity } = useSelector(
    (state) => state.gameSlice
  );
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
      intervalRef.current = setInterval(
        () => {
          dispatch(addPlain());
        },
        complexity === "low"
          ? 2000
          : complexity === "medium"
          ? 1500
          : complexity === "hard"
          ? 1000
          : 500
      );
    };
    if (gameStatus === "game") {
      counter();
    }
  }, [gameStatus, dispatch, complexity]);

  useEffect(() => {
    if (gameOver) {
      clearInterval(intervalRef.current);
    }
  }, [gameOver]);

  return (
    <>
      {manual && (
        <div className="app">
          <Map />
          {gameStatus === "main" && <HomePage />}
          {gameOver && <GameOver />}

          {gameStatus === "game" && (
            <>
              <StartTimer />
              {plains.map((plain, index) => (
                <Plain key={index} id={index} plain={plain} />
              ))}
            </>
          )}
        </div>
      )}
      {!manual && <Manual />}
      <WidthWarning />
    </>
  );
}

export default App;
