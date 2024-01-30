// Post.jsx
import React, { memo } from 'react';
import PostHeader from './PostHeader';
import PostResults from './PostResults';
import PostPhotos from './PostPhotos';
import PostDescription from './PostDescription';
import PostFeedback from './PostFeedback';
import style from '../css/NewsFeed.module.css';
import { Posts } from '../types/Posts';

function Post({ el }:{el:Posts}) {
  return (
    <div className={style.posts}>
      <PostHeader {...el} />
      <PostResults {...el} />
      <PostPhotos {...el} />
      <PostDescription {...el} />
      <PostFeedback {...el} />
    </div>
  );
}

export default memo(Post);

