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
import {
  setAvatar,
  setgameStatus,
  setUserName,
} from "../redux/slices/gameSlice";
import { theme } from "../theme";

const avatars = [
  avatar1,
  avatar3,
  avatar2,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
];

const HomePage = () => {
  const dispatch = useDispatch();
  const { avatar, userName } = useSelector((state) => state.gameSlice);
  const [username, setUsername] = useState(userName);

  const startGameHandler = () => {
    if (username.length > 1) {
      dispatch(setgameStatus("game"));
      dispatch(setUserName(username));
    }
  };

  const userNameInputHandler = (event) => {
    setUsername((prev) => (prev = event.target.value));
  };

  const changeAwatarHandler = (option) => {
    dispatch(setAvatar(option));
  };

  return (
    <div className="home">
      <div className="home__inner">
        <h1 className="game_title" style={{color: theme[avatar].gameTitle}}>KILL WORDS</h1>
        <button className="home__avatar_button" onClick={() => changeAwatarHandler('prev')}>
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.93519 0.967041L0.450195 9.45204L8.93519 17.937L10.3502 16.523L3.2782 9.45204L10.3502 2.38104L8.93519 0.967041Z"
              fill={theme[avatar].arrows}
              fillOpacity="0.65"
            />
          </svg>
        </button>
        <button className="home__avatar_button" onClick={() => changeAwatarHandler('next')}>
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.06481 17.937L10.5498 9.45204L2.06481 0.967041L0.649805 2.38104L7.7218 9.45204L0.649805 16.523L2.06481 17.937Z"
              fill={theme[avatar].arrows}
              fillOpacity="0.65"
            />
          </svg>
        </button>
        <div className="home__avatar">
          <img src={avatars[avatar]} alt="avatar" />
        </div>
        <input
          className="home__input"
          type="text"
          value={username}
          onChange={(event) => userNameInputHandler(event)}
        />
        <div className="home__chose">
          <button className="home__chose_button button">low</button>
          <button className="home__chose_button button home__chose_button--active">
            medium
          </button>
          <button className="home__chose_button button">hard</button>
          <button className="home__chose_button button">unreal</button>
        </div>
        <div className="home__chose">
          <button className="home__chose_button button">ru</button>
          <button className="home__chose_button button home__chose_button--active">
            en
          </button>
        </div>
        <button
          className="home__start_button button"
          onClick={() => startGameHandler()}
        >
          Start game
        </button>
        <p className="score" style={{color: theme[avatar].bestScore}}>
          BEST SCORE : <span style={{color: theme[avatar].bestScoreSpan}}>26</span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
