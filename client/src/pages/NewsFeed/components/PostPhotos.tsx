import React, { memo } from 'react';
import style from '../css/NewsFeed.module.css';
import { Posts } from '../types/Posts';


const PostPhotos = ({ photo_post }:Posts) => {
  return (
    <div className={style.post_photos}>
      {photo_post.map((photo, index) => (
        <div key={index} className={style.post_photo}>
          <img src={photo} alt="" />
        </div>
      ))}
    </div>
  );
}

export default memo(PostPhotos);
