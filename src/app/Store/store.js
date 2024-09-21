// src/app/store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import coinReducer from './reducers/coinReducer';
import userSlice from './reducers/userSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'coin'] 
};

const reducer = combineReducers({
  coin: coinReducer,
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
