import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  age: null,
  jobTitle: null,
  email: null,
  authToken:null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    logIn: (state, action) => {
      const { username, age, jobTitle, authToken, email } = action.payload;
      state.username = username;
      state.age = age;
      state.jobTitle = jobTitle;
      state.email = email;
      state.authToken = authToken;
      state.isAuthenticated = true; 
    },

    logOut: (state) => {
      state.username = null;
      state.age = null;
      state.jobTitle = null;
      state.email = null;
      state.authToken = null;
      state.isAuthenticated = false; 
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
