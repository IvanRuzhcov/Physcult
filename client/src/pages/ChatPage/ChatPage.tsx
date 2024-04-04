import React, { useEffect, useMemo, useState } from 'react';
import style from './css/ChatPage.module.css';
import leftArrow from '../../assets/SquareAltArrowLeft.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import no_photo from '../../assets/no_avatar.png';
import micro from '../../assets/icons/microf.png';

import pictures from '../../assets/pictures.png';
import arrow_up from '../../assets/arrow_up.png';
import io from 'socket.io-client';
import { Message } from './types/Message';
import { initChat } from './ChatSlice';

function ChatPage() {
  const { id } = useParams();
  const users = useSelector((store: RootState) => store.auth.allUsers);
  const sender = useSelector((store: RootState) => store.auth.user?.id!);
  const message = useSelector((store: RootState) => store.chat.chat);
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const navigate = useNavigate();

  

  const dispatch = useAppDispatch();
  const socket = useMemo(() => io(), []);

  const sendMessage = async () => {
    const newMessage: Message = {
      content: text,
      sender_id: sender,
      recipient_id: Number(id),
    };
    socket.emit('sendMessage', newMessage);
    setText('');

    
  };

  useEffect(() => {

    const handleMessage = (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    socket.on('message', handleMessage);

    return () => {
      socket.off('message', handleMessage);
      // socket.close();
    };
  }, [id, sender, socket]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(initChat(Number(id)));
    };
    fetchData();
  }, [dispatch, id]);


  useEffect(() => {
    // Обновляем состояние messages при изменении message из Redux
    setMessages(message);
  }, [message]);

  const user = useMemo(() => {
    return users.find((el) => el.id === Number(id));
  }, [users, id]);

  return (
    <div className={style.chat_container}>
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
      <div className={style.line}></div>
      <div className={style.chat_body}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${style.message_container} ${
              message.sender_id === sender
                ? style.sender_container
                : style.recipient_container
            }`}
          >
            <div
              className={`${style.message} ${
                message.sender_id === sender ? style.sender : style.recipient
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

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
          <button className={style.chat_btn} onClick={sendMessage}>
            <img src={arrow_up} alt="" />
          </button>
        )}
      </div>
    </div>
  );
}

export default ChatPage;
