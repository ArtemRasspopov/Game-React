import { configureStore } from '@reduxjs/toolkit'
import plaintsSlice from './slices/plaintsSlice'

export const store = configureStore({
  reducer: {plaintsSlice},
})