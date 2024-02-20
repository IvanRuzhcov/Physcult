import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import AuthData from './types/AuthData';
import { RegisterData } from './types/RegisterData';
import UserAuthState from './types/UserAuthState';
import { Сonfirmation } from './types/Сonfirmation';
import User from './types/User';

const initialState: UserAuthState = {
  user: undefined,
  authChecked: false,
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

export const login = createAsyncThunk('auth/loginFeth', (data: AuthData) => {
  if (!data.email.trim() || !data.password.trim()) {
    throw new Error('Не все поля заполнены!');
  }
  return api.authFetch(data);
});

export const verification = createAsyncThunk('auth/verification', () =>
  api.getUser()
);

export const logoutUser = createAsyncThunk(
  'logout/logoutFetch',
  api.logoutFetch
);

export const updataUser = createAsyncThunk(
  'update/updatUserPersonalDataFetch',
  (action: User) => api.updatUserPersonalDataFetch(action)
);


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.existingUser;
      })
      .addCase(emailСonfirmation.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(userRegistation.fulfilled, (state, action) => {
        state.user = action.payload.existingUser;
      })
      .addCase(verification.fulfilled, (state, action) => {
        state.authChecked = true;

        state.user = action.payload.isLoggedIn
          ? action.payload.user
          : undefined;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.user = undefined;
      })
      .addCase(updataUser.fulfilled, (state, action) => {
        state.user = {
          ...state.user,
          name: action.payload.name,
          surname: action.payload.surname,
          nick: action.payload.nick,
          email: action.payload.email,
          gender: action.payload.gender,
          telephone: action.payload.telephone,
          date_of_birth: action.payload.date_of_birth,
        };
      })
   
  },
});
export default authSlice.reducer;
