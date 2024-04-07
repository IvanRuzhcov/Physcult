import React, { memo, useState } from 'react';
import style from '../css/NewsFeed.module.css';
import likee from '../../../assets/like.png';
import like_activ from '../../../assets/like_activ.png';
import coments from '../../../assets/comments.png';
import back from '../../../assets/back.png';
import { Posts } from '../../PersonalPage/types/Post';
import { RootState, useAppDispatch } from '../../../store';
import { likeUser, removeLike } from '../../UserPage/UserPageSlice';
import { useSelector } from 'react-redux';

const PostFeedback = ({ id }: Posts) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();

  const likes = useSelector((store: RootState) => store.userData.like);
  const userId = useSelector((store: RootState) => store.auth.user?.id!);

  const likePost = likes.filter((el) => el.post_id === id);
  const userLick = likePost.some((el) => el.user_id === userId);

  const handleLike = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const action = await dispatch(
      likeUser({ post_id: Number(id), user_id: userId })
    );
  };
  const handleRemoveLike = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const action = await dispatch(
      removeLike({ post_id: Number(id), user_id: userId })
    );
  };

  return (
    <div className={style.post_feedback}>
      <div className={style.post_feedback_box}>
        {!userLick ? (
          <div onClick={handleLike}>
            <img src={likee} alt="" />
          </div>
        ) : (
          <div onClick={handleRemoveLike}>
            <img src={like_activ} alt="" />
          </div>
        )}
        <span>{likePost.length}</span>
      </div>
      <div className={style.post_feedback_box}>
        <div>
          <img src={coments} alt="" />
        </div>
        <span>0</span>
      </div>
      <div className={style.post_feedback_box}>
        <img src={back} alt="" />
      </div>
    </div>
  );
};

export default memo(PostFeedback);
