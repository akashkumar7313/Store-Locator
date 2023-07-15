import { configureStore } from '@reduxjs/toolkit'
import storeReducer from './slices/storeDataSlice'
export const store = configureStore({
  reducer: {
    storeData: storeReducer,
  }
});