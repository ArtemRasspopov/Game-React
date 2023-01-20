import React, { useState } from "react";
import avatar1 from "../images/avatars/AVATAR-1.png";
import avatar2 from "../images/avatars/AVATAR-2.png";
import avatar3 from "../images/avatars/AVATAR-3.png";
import avatar4 from "../images/avatars/AVATAR-4.png";
import avatar5 from "../images/avatars/AVATAR-5.png";
import avatar6 from "../images/avatars/AVATAR-6.png";
import avatar7 from "../images/avatars/AVATAR-7.png";
import avatar8 from "../images/avatars/AVATAR-8.png";
import avatar9 from "../images/avatars/AVATAR-9.png";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar, setgameStatus } from "../redux/slices/gameSlice";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9];

const HomePage = () => {
  const dispatch = useDispatch();
  const {avatar} = useSelector((state) => state.gameSlice)
  const [username, setUsername] = useState("user");

  const startGameHandler = () => {
    if (username.length > 1) {
      dispatch(setgameStatus({ userName: username, gameStatus: "game" }));
    }
  };

  const userNameInputHandler = (event) => {
    setUsername((prev) => (prev = event.target.value));
  };

  const changeAwatarHandler = () => {
    dispatch(setAvatar())
  }

  return (
    <div className="home">
      <div className="home__inner">
        <div className="home__avatar" onClick={() => changeAwatarHandler()}>
          <img src={avatars[avatar]} alt="avatar"/>
        </div>
        <input
          className="home__input"
          type="text"
          value={username}
          onChange={(event) => userNameInputHandler(event)}
        />
        <button
          className="home__sturt_button"
          onClick={() => startGameHandler()}
        >
          Start game
        </button>
      </div>
    </div>
  );
};

export default HomePage;
