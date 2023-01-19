import { createSlice } from "@reduxjs/toolkit";
const words = [
  'тайпскрипт',
  'пайтон',
  'джава',
  "джаваскрипт"
]


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
          state.activePlain++;
        }
      }
    },
    setGameOver: (state, action) => {
      if (action.payload === state.activePlain) {
        state.gameOver = true;
      }
    },
  },
});

export const { addPlain, setActivePlain, setLetters, setGameOver } =
  plaintsSlice.actions;

export default plaintsSlice.reducer;
