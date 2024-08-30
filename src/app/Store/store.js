// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './reducers/coinReducer';

export const store = configureStore({
  reducer: {
    coins: coinReducer,
  },
});
