import { createSlice } from "@reduxjs/toolkit";
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
};

export const plaintsSlice = createSlice({
  name: "plaintsSlice",
  initialState,
  reducers: {
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
  },
});

export const { addPlain, setActivePlain, setLetters, setGameOver, resetGame } =
  plaintsSlice.actions;

export default plaintsSlice.reducer;
