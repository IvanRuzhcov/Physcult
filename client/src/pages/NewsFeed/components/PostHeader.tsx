import React, { memo } from 'react';
import style from '../css/NewsFeed.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Posts } from '../../PersonalPage/types/Post';
import noPhoto from '../../../assets/no_avatar.png';
import { useNavigate } from 'react-router-dom';
import { createdAtData } from '../../../helpers/format'

function PostHeader({ createdAt, user_id_post }: Posts) {
  const navigate = useNavigate();
  const users = useSelector((store: RootState) => store.auth.allUsers);

  const postUser = users.find((u) => u.id === user_id_post);

  const hendlePost = () => {
    navigate(`/profile/${user_id_post}`);
  };

  return (
    <div className={style.post_header} onClick={hendlePost}>
      <img src={postUser?.avatar_img || noPhoto} alt="" />
      <div className={style.post_name}>
        <span>{`${postUser?.name} ${postUser?.surname}`}</span>
        <div>{createdAtData(createdAt)}</div>
      </div>
    </div>
  );
}

export default memo(PostHeader);
