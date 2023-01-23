import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./slices/gameSlice";

export const store = configureStore({
  reducer: { gameSlice },
});
