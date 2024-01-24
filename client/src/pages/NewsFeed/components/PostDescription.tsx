// PostDescription.tsx
import React from 'react';
import style from '../css/NewsFeed.module.css';
import { Posts } from '../types/Posts';



const PostDescription = ({ description }:Posts) => {
  return (
    <div className={style.post_description}>
      <span>{description}</span>
    </div>
  );
}

export default PostDescription;