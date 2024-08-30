// src/app/Store/reducers/selectedCoinReducer.js
import { createSlice } from '@reduxjs/toolkit';

const selectedCoinSlice = createSlice({
  name: 'selectedCoin',
  initialState: {
    selectedCoin: null,
  },
  reducers: {
    setSelectedCoin: (state, action) => {
      state.selectedCoin = action.payload;
    },
  },
});

export const { setSelectedCoin } = selectedCoinSlice.actions;
export default selectedCoinSlice.reducer;
