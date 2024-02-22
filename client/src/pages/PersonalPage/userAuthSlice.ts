import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import AuthData from './types/AuthData';
import { RegisterData } from './types/RegisterData';
import UserAuthState from './types/UserAuthState';
import { Сonfirmation } from './types/Сonfirmation';
import User from './types/User';

const initialState: UserAuthState = {
  user: undefined,
  allUsers: [],
  post: [],
  allPosts: [],
  subscription: [],
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
        throw new Error('Пользователь с такой почтой уже зарегистрирован');
      }

      return userData;
    } catch (error: any) {
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

export const verification = createAsyncThunk(
  'auth/verification',
  async () => await api.getUser()
);

export const logoutUser = createAsyncThunk(
  'logout/logoutFetch',
  api.logoutFetch
);

export const updataUser = createAsyncThunk(
  'update/updatUserPersonalDataFetch',
  async (action: User) => await api.updatUserPersonalDataFetch(action)
);
export const initPost = createAsyncThunk(
  'initPost/initPostFeth',
  async () => await api.initPostFeth()
);
export const initUserPost = createAsyncThunk(
  'initPost/initUserPostFeth',
  async () => await api.initUserPostFeth()
);
export const initSubscription = createAsyncThunk(
  'initSubscription/initSubscriptionFeth',
  () => api.initSubscriptionFeth()
);
export const initUsers = createAsyncThunk('user/initUsersFeth', () =>
  api.initUsersFeth()
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
      .addCase(login.rejected, (state, action) => {
        // Обработка ошибки в случае отклонения логина
        console.error('Login failed:', action.payload);
      })
      .addCase(emailСonfirmation.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(emailСonfirmation.rejected, (state, action) => {
        // Обработка ошибки в случае отклонения подтверждения по электронной почте
        console.error('Email confirmation failed:', action.payload);
      })
      .addCase(userRegistation.fulfilled, (state, action) => {
        state.user = action.payload.existingUser;
      })
      .addCase(userRegistation.rejected, (state, action) => {
        // Обработка ошибки в случае отклонения регистрации пользователя
        console.error('User registration failed:', action.payload);
      })
      .addCase(verification.fulfilled, (state, action) => {
        state.authChecked = true;

        state.user = action.payload.isLoggedIn
          ? action.payload.user
          : undefined;
      })
      .addCase(verification.rejected, (state, action) => {
        // Обработка ошибки в случае отклонения верификации
        console.error('Verification failed:', action.payload);
      })

      .addCase(logoutUser.fulfilled, (state, action) => {
        state.user = undefined;
        state.post = [];
        state.allPosts = [];
        state.allUsers = [];
        state.subscription = [];
      })
      .addCase(logoutUser.rejected, (state, action) => {
        // Обработка ошибки в случае отклонения обновления пользователя
        console.error('Logout failed:', action.payload);
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
      .addCase(updataUser.rejected, (state, action) => {
        // Обработка ошибки в случае отклонения обновления пользователя
        console.error('Update user failed:', action.payload);
      })
      .addCase(initUserPost.fulfilled, (state, action) => {
        state.post = action.payload;
      })
      .addCase(initUserPost.rejected, (state, action) => {
        // Обработка ошибки в случае отклонения инициализации постов пользователя
        console.error('Init user posts failed:', action.payload);
      })
      .addCase(initSubscription.fulfilled, (state, action) => {
        state.subscription = action.payload;
      })
      .addCase(initSubscription.rejected, (state, action) => {
        // Обработка ошибки в случае отклонения инициализации подписок
        console.error('Init subscriptions failed:', action.payload);
      })
      .addCase(initPost.fulfilled, (state, action) => {
        state.allPosts = action.payload;
      })
      .addCase(initPost.rejected, (state, action) => {
        // Обработка ошибки в случае отклонения инициализации постов
        console.error('Init posts failed:', action.payload);
      })
      .addCase(initUsers.fulfilled, (state, action) => {
        state.allUsers = action.payload;
      })
      .addCase(initUsers.rejected, (state, action) => {
        // Обработка ошибки в случае отклонения инициализации пользователей
        console.error('Init users failed:', action.payload);
      });
  },
});
export default authSlice.reducer;
