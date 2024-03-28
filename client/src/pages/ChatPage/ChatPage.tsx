import React, { useMemo, useState } from 'react';
import style from './css/ChatPage.module.css';
import leftArrow from '../../assets/SquareAltArrowLeft.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import no_photo from '../../assets/no_avatar.png';
import micro from '../../assets/icons/microf.png';
// import heart from '../../assets/icons/heart.png';
import pictures from '../../assets/pictures.png';
import arrow_up from '../../assets/arrow_up.png'


function ChatPage() {
  const { id } = useParams();
  const users = useSelector((store: RootState) => store.auth.allUsers);
  const [text, setText] = useState('');

  const user = useMemo(() => {
    return users.find((el) => el.id === Number(id));
  }, [users, id]);

  const navigate = useNavigate();

  return (
    <div className={style.chat_container}>
      <div className={style.chat_header}>
        <div
          className={style.exitingSettings}
          onClick={() => navigate('/messenger')}
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
      <div className={style.line}></div>
      <div className={style.chat_body}></div>

      <div className={style.chat_input_container}>
        <div className={style.chat_add_photo}>
          <img src={pictures} alt="" />
        </div>
        <div className={style.chat_input}>
          <textarea
            placeholder="Новое сообщение"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        {text.length === 0 ? (
          <div className={style.chat_audio}>
            <img src={micro} alt="" />
          </div>
        ) : (
          <button className={style.chat_btn}>
            <img src={arrow_up} alt="" />
          </button>
        )}
      </div>
    </div>
  );
}

export default ChatPage;
