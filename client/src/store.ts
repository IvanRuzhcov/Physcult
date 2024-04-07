import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from './pages/PersonalPage/userAuthSlice';
import deviceSlice from './pages/DevicePage/DeviceSlice';
import userPageSlice from './pages/UserPage/UserPageSlice'
import ChatSlice from './pages/ChatPage/ChatSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    device: deviceSlice,
    userData: userPageSlice,
    chat:ChatSlice
    // Другие редьюсеры, если они у вас есть
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
