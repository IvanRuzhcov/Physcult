import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import { UserPageState } from './types/UserPageState';
import { Subscription } from '../PersonalPage/types/Subscription';
import { Like } from './types/Like';
import { Comment } from './types/Comment';

const initialState: UserPageState = {
  like: [],
  comment: [],
  subscription: [],
  subscribers: [],
};

export const initSubscription = createAsyncThunk(
  'subscription/initSubscriptionFetch',
  async (action: number) => await api.initSubscriptionFetch(action)
);
export const initSubscribers = createAsyncThunk(
  'subscribers/initSubscribersFetch',
  async (action: number) => await api.initSubscribersFetch(action)
);
export const unsubscribe = createAsyncThunk(
  'unsubscribe/unsubscribeFetch',
  async (id: Subscription) => api.unsubscribeFetch(id)
);
export const subscribe = createAsyncThunk(
  'subscribe/subscribeFetch',
  async (id: Subscription) => api.subscribeFetch(id)
);
export const initLike = createAsyncThunk(
  'initLike/initLikeFetch',
  async () => await api.initLikeFetch()
);
export const likeUser = createAsyncThunk(
  'like/likeFeth',
  async (action: Like) => api.likeFetch(action)
);
export const removeLike = createAsyncThunk(
  'like/removeLikeFetch',
  async (action: Like) => api.removeLikeFetch(action)
);
export const initComment = createAsyncThunk('comment/initCommentFetch', () =>
  api.initCommentFetch()
);
export const addComment = createAsyncThunk(
  'comment/addCommentFetch',
  async (comment: Comment) => {
    api.addCommentFetch(comment);
  }
);
export const removeComment = createAsyncThunk(
  'comment/removeCommentFetch',
  async (comment: Comment) => {
    api.removeCommentFetch(comment);
  }
);

const userPageSlice = createSlice({
  name: 'userPage',
  initialState,
  reducers: {},
  extraReducers: (bulder) => {
    bulder
      .addCase(initSubscription.fulfilled, (state, action) => {
        state.subscription = action.payload;
      })
      .addCase(initSubscription.rejected, (state, action) => {
        console.error('Subscription confirmation failed:', action.payload);
      })
      .addCase(initSubscribers.fulfilled, (state, action) => {
        state.subscribers = action.payload;
      })
      .addCase(initSubscribers.rejected, (state, action) => {
        console.error('Subscription confirmation failed:', action.payload);
      })
      .addCase(unsubscribe.fulfilled, (state, action) => {
        state.subscribers = state.subscribers.filter(
          (el) => el.user_id !== action.meta.arg.user_id
        );
      })
      .addCase(subscribe.fulfilled, (state, action) => {
        console.log(action.meta.arg)
        state.subscribers.push(action.meta.arg);
      })
      .addCase(initLike.fulfilled, (state, action) => {
        state.like = action.payload;
      })
      .addCase(initLike.rejected, (state, action) => {
        console.error('Like confirmation failed:', action.payload);
      })
      .addCase(removeLike.fulfilled, (state, action) => {
        state.like = state.like.filter(
          (el) => el.user_id !== action.meta.arg.user_id
        );
      })
      .addCase(likeUser.fulfilled, (state, action) => {
        state.like.push(action.meta.arg);
      })
      .addCase(initComment.fulfilled, (state, action) => {
        state.comment = action.payload;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comment.push(action.meta.arg);
      });
  },
});
export default userPageSlice.reducer;
