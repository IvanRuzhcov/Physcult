import React, { memo } from 'react';
import style from '../css/NewsFeed.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Posts } from '../../PersonalPage/types/Post';
import noPhoto from '../../../assets/no_avatar.png'

function PostHeader({createdAt,user_id_post}:Posts) {
  const users = useSelector((store:RootState)=> store.auth.allUsers)
let formattedDate = ''

  const regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z$/;
const match = createdAt!.match(regex);
if (match) {
  const year = match[1];
  const month = match[2];
  const day = match[3];
  const hours = match[4];
  const minutes = match[5];

  // Собираем отформатированную строку
  formattedDate = `${day}.${month}.${year} • ${hours}:${minutes}`;
}

const postUser = users.find((u) => u.id === user_id_post);
  return (
    <div className={style.post_header}>
      <img src={postUser?.avatar_img || noPhoto } alt="" />
      <div className={style.post_name}>
        <span>{postUser?.nick}</span>
        <div>{`${formattedDate} `}</div>
      </div>
    </div>
  );
}

export default memo(PostHeader);
