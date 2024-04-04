import React, { ChangeEvent } from 'react';
import style from '../css/ChatPage.module.css'; // Подключите CSS-файл для стилей компонента
import micro from '../../../assets/icons/microf.png';

import pictures from '../../../assets/pictures.png';
import arrow_up from '../../../assets/arrow_up.png';

interface ChatInputProps {
  text: string;
  setText: (text: string) => void;
  sendMessage: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ text, setText, sendMessage }) => {

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className={style.chat_input_container}>
      <div className={style.chat_add_photo}>
        <img src={pictures} alt="" />
      </div>
      <div className={style.chat_input}>
        <textarea
          placeholder="Новое сообщение"
          value={text}
          onChange={handleChange}
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
  );
}

export default ChatInput;
