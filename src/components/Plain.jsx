import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGameOver } from "../redux/slices/plaintsSlice";

const Plain = ({ id }) => {
  const plainRef = useRef(null);
  const plain = useSelector((state) => state.plaintsSlice.plains[id]);
  const activePlain = useSelector((state) => state.plaintsSlice.activePlain);
  const dispatch = useDispatch();

  useEffect(() => {
    plainRef.current.addEventListener("animationend", () => {
      dispatch(setGameOver(id));
    });
  }, [id, activePlain, dispatch]);

  return (
    <div
      className={`plane ${id === activePlain ? "plane--active" : ""}`}
      style={{ top: `${plain.killed ? '100vh' : plain.height + "px"}` }}
      ref={plainRef}
    >
      <div className="plain__word">
        {plain.word.split("").map((letter, id) => (
          <p key={id} style={{ color: `${id < plain.letters ? "green" : ""}` }}>
            {letter}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Plain;
