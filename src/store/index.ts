
import appReducer from './appSlice';
import { persistReducer, persistStore } from 'redux-persist';
import {configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userInfo']
};

const persistedReducer = persistReducer(persistConfig, appReducer)


export const store = configureStore({
  reducer: {
    app: persistedReducer,
  },
});


export const persistor = persistStore(store);

