import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import RegisterState from './types/RegisterState';
import { RegisterData } from './types/RegisterData';
import { Сonfirmation } from './types/Сonfirmation';

const initialState: RegisterState = {
  registerData: [],
};

export const emailСonfirmation = createAsyncThunk(
  'auth/emailСonfirmationFetch',
  async (data: RegisterData, { rejectWithValue }) => {
    try {
      if (data.password !== data.repeatPassword) {
        throw new Error('Пароли не совпадают');
      }
      if (
        !data.email.trim() ||
        !data.password.trim() ||
        !data.repeatPassword.trim()
      ) {
        throw new Error('Не все поля заполнены!');
      }

      const userData = await api.emailСonfirmationFetch(data);

      if (!userData.success) {
        // Можете добавить дополнительную информацию об ошибке в userData, если необходимо
        throw new Error('Пользователь с такой почтой уже зарегистрирован');
      }

      return userData;
    } catch (error: any) {
      // Используйте явное указание типа данных (any) для переменной error
      return rejectWithValue({ message: error.message });
    }
  }
);

export const userRegistation = createAsyncThunk(
  'auth/userRegistation',
  async (data: Сonfirmation) => {
    const userData = await api.userRegistationFetch(data);
    return userData;
  }
);

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(emailСonfirmation.fulfilled, (state, action) => {
        state.registerData = action.payload;
      })

      .addCase(userRegistation.fulfilled, (state, action) => {
        state.registerData = action.payload;
      });
  },
});
export default registerSlice.reducer;
