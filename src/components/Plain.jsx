import React, { useCallback, useEffect, useRef } from "react";

const Plain = ({plain, index , gameOverHandler, killPlain }) => {
  const plainRef = useRef(null);

  const planeFinished = useCallback(() => {
    gameOverHandler();
  }, [gameOverHandler]);

  const clickHandler = useCallback(() => {
    killPlain(plain.id)
  }, [killPlain, index])

  useEffect(() => {
    plainRef.current.addEventListener("animationend", planeFinished);
  }, [planeFinished]);

  return (
    <div className="plane" style={{ top: `${plain.height}px` }} ref={plainRef} onClick={() => clickHandler()}>{plain.id}</div>
  );
};

export default Plain;
