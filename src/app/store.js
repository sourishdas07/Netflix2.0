import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'react';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
