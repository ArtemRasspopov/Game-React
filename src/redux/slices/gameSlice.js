import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameStatus: "main",
  userName: "",
  avatar: 0,
};

export const gameSlice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {
    setgameStatus: (state, action) => {
      state.gameStatus = action.payload.gameStatus;
      state.userName = action.payload.userName;
    },
    setAvatar: (state) => {
      if (state.avatar < 8) {
        state.avatar++;
      } else {
        state.avatar = 0;
      }
    },
  },
});

export const { setgameStatus, setAvatar } = gameSlice.actions;

export default gameSlice.reducer;
