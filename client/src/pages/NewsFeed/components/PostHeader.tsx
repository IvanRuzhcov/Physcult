// PostHeader.jsx
import React from 'react';
import style from '../css/NewsFeed.module.css';
import { Posts } from '../types/Posts';

function PostHeader({ photo, name, date, time_post }:Posts) {
  return (
    <div className={style.post_header}>
      <img src={photo} alt="" />
      <div className={style.post_name}>
        <span>{name}</span>
        <div>{`${date}•${time_post} `}</div>
      </div>
    </div>
  );
}

export default PostHeader;
