import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import { DeviceType } from './types/DeviceType';

export const initialState: DeviceType = {
  polar: undefined,
};

export const initPolar = createAsyncThunk(
  'init/initPolarFetch',
  async () => await api.initPolarFetch()
);

const deviceSlice = createSlice({
  name: 'devaice',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(initPolar.fulfilled, (state, action) => {
        state.polar = action.payload;
      })
      .addCase(initPolar.rejected, (state, action) => {
        // Обработка ошибки в случае отклонения инициализации подписок
        console.error('Init polar failed:', action.payload);
      }),
});
export default deviceSlice.reducer