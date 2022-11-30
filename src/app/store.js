import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import bookReducer from '../features/slice/BookSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: bookReducer
  },
});
