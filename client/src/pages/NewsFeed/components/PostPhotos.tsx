import React, { memo } from 'react';
import style from '../css/NewsFeed.module.css';
import noPhoto from '../../../assets/no_avatar.png'
import { Posts } from '../../PersonalPage/types/Post';


const PostPhotos = ({ photo_post }:Posts) => {
  return (
    <div className={style.post_photos}>
      {photo_post.map((photo, index) => (
        <div key={index} className={style.post_photo}>
          <img src={photo || noPhoto} alt="" />
        </div>
      ))}
    </div>
  );
}

export default memo(PostPhotos);
