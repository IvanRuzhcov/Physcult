import React from 'react';
import style from '../css/ChatPage.module.css';
import { useNavigate } from 'react-router-dom';
import no_photo from '../../../assets/no_avatar.png';
import leftArrow from '../../../assets/SquareAltArrowLeft.png';
import User from '../../PersonalPage/types/User';
import { Message } from '../types/Message';

interface ChatHederType {
    setMessages: (messages: Message[]) => void;
    user:User
}

function ChatHeader({ setMessages, user }:ChatHederType) {
  const navigate = useNavigate();

  return (
    <div className={style.chat_header}>
      <div
        className={style.exitingSettings}
        onClick={() => {
          navigate('/messenger');
          setMessages([]);
        }}
      >
        <img src={leftArrow} alt="" />
      </div>
      <div className={style.chat_name}>
        <span>{`${user?.name} ${user?.surname}`}</span>
        <div>был(а) 5 минут назад</div>
      </div>
      <div className={style.chat_avatar_img}>
        <img src={user?.avatar_img || no_photo} alt="" />
      </div>
    </div>
  );
}

export default ChatHeader;
