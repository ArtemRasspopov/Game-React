import { configureStore } from "@reduxjs/toolkit";
import plaintsSlice from "./slices/plaintsSlice";
import gameSlice from "./slices/gameSlice";

export const store = configureStore({
  reducer: { plaintsSlice, gameSlice },
});
