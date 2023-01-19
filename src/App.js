import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Plain from "./components/Plain";
import { addPlain, setLetters } from "./redux/slices/plaintsSlice";
import { wordsData } from "./wordsData";

function App() {
  const { plains, gameOver } = useSelector((state) => state.plaintsSlice);
  const dispatch = useDispatch();
  let intervalRef = useRef(null);

  useEffect(() => {
    const keyPressHandler = (e) => {
      dispatch(setLetters(e.key));
    };

    document.addEventListener("keypress", keyPressHandler);
  }, [dispatch]);

  useEffect(() => {
    const counter = (close) => {
      intervalRef.current = setInterval(function () {
        dispatch(addPlain())
      }, 2000);
    };
    counter();

    console.log(wordsData.split('\n'));
  }, []);

  useEffect(() => {
    if (gameOver) {
      clearInterval(intervalRef.current);
    }
  }, [gameOver]);

  return (
    <div className="app">
      {gameOver && <div className="gameOver">Game Over</div>}
      {plains.map((plain, index) => (
        <Plain key={index} id={index} />
      ))}
    </div>
  );
}

export default App;
