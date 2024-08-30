// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { coinSlice } from './reducers/coinReducer';

export const store = configureStore({
  reducer: {
    coins: coinSlice?.reducer,
    
  },
});


