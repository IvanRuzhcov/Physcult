import React, { useEffect, useMemo, useState } from 'react';
import style from './css/ChatPage.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';

import io from 'socket.io-client';
import { Message } from './types/Message';
import { initChat } from './ChatSlice';
import ChatInput from './component/ChatInput';
import ChatBody from './component/ChatBody';
import ChatHeader from './component/ChatHeader';
import { initSubscribers, initSubscription } from '../PersonalPage/userAuthSlice';

function ChatPage() {
  const { id } = useParams();
  const users = useSelector((store: RootState) => store.auth.allUsers);
  const sender = useSelector((store: RootState) => store.auth.user?.id!);
  const message = useSelector((store: RootState) => store.chat.chat);

  const [text, setText] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

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
      <div className={style.container_data}>
        <ChatHeader setMessages={setMessages} user={user!} />
        <div className={style.line}></div>
        <ChatBody messages={messages} />

        <ChatInput text={text} setText={setText} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default ChatPage;
