import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from './pages/PersonalPage/userAuthSlice';


export const store = configureStore({
  reducer: {
    auth: authSlice

    // Другие редьюсеры, если они у вас есть
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;