import { createSlice } from "@reduxjs/toolkit";

export const localUser = localStorage.getItem("userName");
export const localUserAvatar = localStorage.getItem("userAvatar");
export const localBestScore = localStorage.getItem("bestScore");
export const localComplexity = localStorage.getItem("complexity");
export const localLanguage = localStorage.getItem("language");

const words = [
  "тайпскрипт",
  "пайтон",
  "джава",
  "джаваскрипт",
  "приложение",
  "макрос",
  "мерж",
  "пулреквест",
  "коммит",
  "скоуп",
  "замыкание",
  "хостинг",
  "функция",
  "класс",
  "метод",
  "массив",
  "эплай",
  "враппер",
  "метод",
  "модуль",
  "гугл",
  "яндекс",
  "мозила",
  "оператор",
  "стринг",
];

const initialState = {
  gameStatus: "main",
  userName: localUser ? localUser : "gamer",
  avatar: localUserAvatar ? localUserAvatar : 0,
  plains: [
    {
      height: Math.floor(Math.random() * (400 - 50) + 50),
      id: Date.now(),
      word: words[Math.floor(Math.random() * (words.length - 1) + 1)],
      letters: 0,
      killed: false,
    },
  ],
  activePlain: 0,
  gameOver: false,
  score: 0,
  bestScore: localBestScore ? localBestScore : 0,
  language: localLanguage ? localLanguage : 'ru',
  complexity: localComplexity ? localComplexity : 'low',
};

export const gameSlice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {
    setgameStatus: (state, action) => {
      state.gameStatus = action.payload;
    },

    setUserName: (state, action) => {
      state.userName = action.payload;
      localStorage.setItem("userName", `${action.payload}`);
    },

    setAvatar: (state, action) => {
      if (action.payload === "next") {
        if (state.avatar < 2) {
          state.avatar++;
          localStorage.setItem("userAvatar", `${state.avatar}`);
        }
      } else {
        if (state.avatar > 0) {
          state.avatar--;
          localStorage.setItem("userAvatar", `${state.avatar}`);
        }
      }
    },

    addPlain: (state) => {
      state.plains.push({
        height: Math.floor(Math.random() * (400 - 50) + 50),
        id: Date.now(),
        word: words[Math.floor(Math.random() * (words.length - 1) + 1)],
        letters: 0,
        killed: false,
      });
    },

    setActivePlain: (state) => {
      state.activePlain = state.activePlain + 1;
    },

    setLetters: (state, action) => {
      const pressedLetter = action.payload;
      const activePlain = state.activePlain;
      const plain = state.plains[activePlain];

      if (pressedLetter === plain.word[plain.letters]) {
        state.plains[activePlain].letters++;
        if (plain.letters === plain.word.length) {
          state.plains[activePlain].killed = true;
          state.score++;
          state.activePlain++;
        }
      }
    },

    setGameOver: (state, action) => {
      if (!state.plains[action.payload].killed) {
        state.gameOver = true;

        if (state.score > state.bestScore) {
          state.bestScore = state.score;
          localStorage.setItem("bestScore", `${state.score}`);
        }
      }
    },

    resetGame: (state) => {
      state.plains = [
        {
          height: Math.floor(Math.random() * (400 - 50) + 50),
          id: Date.now(),
          word: words[Math.floor(Math.random() * (words.length - 1) + 1)],
          letters: 0,
          killed: false,
        },
      ];
      state.activePlain = 0;
      state.gameOver = false;
      state.score = 0;
    },

    srtComplexity: (state, action) => {
      localStorage.setItem("complexity", `${action.payload}`);
      state.complexity = action.payload;
    },

    setLanguage: (state, action) => {
      localStorage.setItem("language", `${action.payload}`);
      state.language = action.payload;
    },
  },
});

export const {
  setgameStatus,
  setAvatar,
  setUserName,
  addPlain,
  setActivePlain,
  setLetters,
  setGameOver,
  resetGame,
  srtComplexity,
  setLanguage,
} = gameSlice.actions;

export default gameSlice.reducer;
