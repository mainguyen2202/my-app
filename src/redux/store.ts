import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

// Tạo kiểu cho dispatch
export type AppDispatch = typeof store.dispatch;

// Export RootState
export type RootState = ReturnType<typeof store.getState>;

export default store;