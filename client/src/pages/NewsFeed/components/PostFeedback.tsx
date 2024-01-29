// PostFeedback.tsx
import React, { memo } from 'react';
import style from '../css/NewsFeed.module.css';
import likee from '../../../assets/like.png';
import coments from '../../../assets/comments.png';
import back from '../../../assets/back.png';
import { Posts } from '../types/Posts';



const PostFeedback = ({ like, comments }:Posts) => {
  return (
    <div className={style.post_feedback}>
      <div className={style.post_feedback_box}>
        <div>
          <img src={likee} alt="" />
        </div>
        <span>{`${like} тыс`}</span>
      </div>
      <div className={style.post_feedback_box}>
        <div>
          <img src={coments} alt="" />
        </div>
        <span>{`${comments} тыс`}</span>
      </div>
      <div className={style.post_feedback_box}>
        <img src={back} alt="" />
      </div>
    </div>
  );
}

export default memo(PostFeedback);
