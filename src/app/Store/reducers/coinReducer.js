// src/app/reducers/coinReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coins: [],
  activeCoin: {
    
  }
};

export const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    setCoinsList: (state, action) => {
      state.coins = action.payload;
    },
    setActiveCoin: (state, action) => {
      state.activeCoin = action.payload
    }
  },
});

export const { setCoinsList, setActiveCoin } = coinSlice.actions;
export default coinSlice.reducer;

