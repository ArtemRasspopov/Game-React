import React, { useCallback, useEffect, useState } from "react";
import Plain from "./components/Plain";

const defaultPlain = [
  { height: Math.floor(Math.random() * (400 - 10) + 10), id: Date.now()},
];

function App() {
  const [pressedLetter, setPressedLetter] = useState(null);
  const [plains, setPlains] = useState(defaultPlain);
  const [gameOver, setGameOver] = useState(false);

  const addPlain = useCallback(() => {
    setInterval(() => {
      setPlains(
        (prev) =>
          (prev = [
            ...prev,
            { height: Math.floor(Math.random() * (400 - 10) + 10), id: Date.now()},
          ])
      );
    }, 3000);
  }, []);

  useEffect(() => {
    document.addEventListener("keypress", onKeypress);
    console.log("sdssdssdsd");
    addPlain()
  }, []);

  const onKeypress = (e) => {
    setPressedLetter((prev) => (prev = e.key));
  };

  const killPlain = (index) => {
    // setPlains(plains.filter((plain) => plain.id !== index));
    console.log('kill ' +  index);
    setPlains(prev => prev = [...prev].map((plain) => plain.id === index ? {id : index , height : 0} : plain))
  };

  const gameOverHandler = () => {
    console.log("Game Over");
    setGameOver(true);
    setTimeout(() => {
      setGameOver(false);
      setPlains([]);
    }, 3000);
  };

  return (
    <div className="app">
      {gameOver ? (
        <div className="gameOver">game over</div>
      ) : (
        <>
          {plains.map((plain, index) => (
            <Plain
              key={index}
              plain={plain}
              index={index}
              killPlain={killPlain}
              gameOverHandler={gameOverHandler}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
