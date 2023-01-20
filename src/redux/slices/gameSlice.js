import { createSlice } from "@reduxjs/toolkit";

export const localUser = localStorage.getItem("userName");
export const localUserAvatar = localStorage.getItem("userAvatar");

const initialState = {
  gameStatus: "main",
  userName: localUser ? localUser : "gamer",
  avatar: localUserAvatar ? localUserAvatar : 0,
 
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
    setAvatar: (state) => {
      if (state.avatar < 8) {
        state.avatar++;
        localStorage.setItem("userAvatar", `${state.avatar}`);
      } else {
        state.avatar = 0;
        localStorage.setItem("userAvatar", `${0}`);
      }
    },
  },
});

export const { setgameStatus, setAvatar, setUserName } =
  gameSlice.actions;

export default gameSlice.reducer;
