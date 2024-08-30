// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './reducers/coinReducer';
import selectedCoinReducer from './reducers/selectedCoinReducer';

export const store = configureStore({
  reducer: {
    coins: coinReducer,
    selectCoin: selectedCoinReducer,
  },
});
