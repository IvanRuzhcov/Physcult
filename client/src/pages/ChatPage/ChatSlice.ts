import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import { ChatState } from './types/ChatState';

const initialState: ChatState = {
  chat: [],
};

export const initChat = createAsyncThunk(
  'chat/initChatFetch',
  async (id: number) => await api.initChatFetch(id)
);

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initChat.fulfilled, (state, action) => {
        state.chat = action.payload;
      })
      .addCase(initChat.rejected, (state, action) => {
        console.error('Init Chat failed:', action.payload);
      });
  },
});
export default chatSlice.reducer;
