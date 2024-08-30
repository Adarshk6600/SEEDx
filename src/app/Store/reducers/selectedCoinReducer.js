import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  image: '',
  data: '',
  data2: '',
  data3: ''
};

const selectedCoinSlice = createSlice({
  name: 'selectedCoin',
  initialState,
  reducers: {
    setSelectedCoin: (state, action) => {
      state.image = action.payload.image;
      state.data = action.payload.data;
      state.data2 = action.payload.data2;
      state.data3 = action.payload.data3;
    },
  },
});

export const { setSelectedCoin } = selectedCoinSlice.actions;
export default selectedCoinSlice.reducer;
