import React, { memo } from 'react';
import style from '../css/NewsFeed.module.css';
import { Posts } from '../../PersonalPage/types/Post';



const PostDescription = ({ description }:Posts) => {
  return (
    <div className={style.post_description}>
      <span>{description}</span>
    </div>
  );
}

export default memo(PostDescription);
