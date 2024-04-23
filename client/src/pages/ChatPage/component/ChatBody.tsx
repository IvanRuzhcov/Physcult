import React, { useEffect, useRef } from 'react';
import style from '../css/ChatPage.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Message } from '../types/Message';

function ChatBody({ messages }: { messages: Message[] }) {
  const sender = useSelector((store: RootState) => store.auth.user?.id!);

  const messagesListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesListRef.current) {
      // Прокрутить вниз при добавлении нового сообщения
      messagesListRef.current.scrollTop = messagesListRef.current.scrollHeight;
    }
  }, [messages]);
  
  return (
    <div className={style.chat_body} ref={messagesListRef}>
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
  );
}

export default ChatBody;
