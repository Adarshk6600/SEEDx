import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  coins: [],
}

export const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    
    setCoinsList: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.coins = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCoinsList } = coinSlice.actions

export default coinSlice.reducer