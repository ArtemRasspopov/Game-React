import React, { useState } from "react";
import avatar1 from "../images/avatars/AVATAR-1.png";
import avatar2 from "../images/avatars/AVATAR-2.png";
import avatar3 from "../images/avatars/AVATAR-3.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setAvatar,
  setgameStatus,
  setLanguage,
  setUserName,
  srtComplexity,
} from "../redux/slices/gameSlice";
import { theme } from "../theme";

const avatars = [avatar1, avatar3, avatar2];

const HomePage = () => {
  const [hide, setHide] = useState(false);
  const dispatch = useDispatch();
  const { avatar, userName, complexity, language, bestScore } = useSelector(
    (state) => state.gameSlice
  );
  const [username, setUsername] = useState(userName);

  const startGameHandler = () => {
    if (username.length > 1) {
      setHide(true);
      setTimeout(() => {
        dispatch(setgameStatus("game"));
        dispatch(setUserName(username));
      }, 1000);
    }
  };

  const userNameInputHandler = (event) => {
    setUsername((prev) => (prev = event.target.value));
  };

  const changeAwatarHandler = (option) => {
    dispatch(setAvatar(option));
  };

  const complexityHandler = (title) => {
    dispatch(srtComplexity(title));
  };

  const languageHandler = (title) => {
    dispatch(setLanguage(title));
  };

  return (
    <div className="home">
      <div
        className={`home__inner ${hide ? "--hide" : ""}`}
        style={avatar > 2 ? { opacity: "0.8" } : { opacity: "1" }}
      >
        <h1 className="game_title" style={{ color: theme[avatar].gameTitle }}>
          KILL WORDS
        </h1>
        <button
          className="home__avatar_button"
          onClick={() => changeAwatarHandler("prev")}
        >
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
        <button
          className="home__avatar_button"
          onClick={() => changeAwatarHandler("next")}
        >
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
          <button
            className={`home__chose_button button ${
              complexity === "low" ? "home__chose_button--active" : ""
            }`}
            onClick={() => complexityHandler("low")}
          >
            low
          </button>
          <button
            className={`home__chose_button button ${
              complexity === "medium" ? "home__chose_button--active" : ""
            }`}
            onClick={() => complexityHandler("medium")}
          >
            medium
          </button>
          <button
            className={`home__chose_button button ${
              complexity === "hard" ? "home__chose_button--active" : ""
            }`}
            onClick={() => complexityHandler("hard")}
          >
            hard
          </button>
          <button
            className={`home__chose_button button ${
              complexity === "unreal" ? "home__chose_button--active" : ""
            }`}
            onClick={() => complexityHandler("unreal")}
          >
            unreal
          </button>
        </div>
        <div className="home__chose">
          <button
            className={`home__chose_button button ${
              language === "ru" ? "home__chose_button--active" : ""
            }`}
            onClick={() => languageHandler("ru")}
          >
            ru
          </button>
          <button
            className={`home__chose_button button ${
              language === "en" ? "home__chose_button--active" : ""
            }`}
            style={{ opacity: "0.5" }}
            // onClick={() => languageHandler("en")}
          >
            en
          </button>
        </div>
        <button
          className="home__start_button button"
          onClick={() => startGameHandler()}
        >
          Start game
        </button>
        <p className="score" style={{ color: theme[avatar].bestScore }}>
          BEST SCORE :{" "}
          <span style={{ color: theme[avatar].bestScoreSpan }}>
            {bestScore}
          </span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
