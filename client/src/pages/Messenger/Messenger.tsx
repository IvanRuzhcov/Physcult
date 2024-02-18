import React, {useState} from 'react'
import Search from './components/Search';
import styles from './css/Messenger.module.css';

interface Message {
  id: number;
  text: string;
  sender: string;
}

export default function Messenger(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      return;
    }
    
    const newMessageObject: Message = {
      id: Date.now(),
      text: newMessage.trim(),
      sender: 'Friend',
    };

    setMessages(prevMessages => [...prevMessages, newMessageObject]);
    setNewMessage('');
  };

  return (
    <div className={styles.container}>
        <div className={styles.title}>
          <span className={styles.title_name}>Чат</span>
        </div>
        <Search/>
      <div className={styles.messages}>
        {messages.map(message => (
          <div className={styles.message_conteiner} key={message.id}>
            <span className={styles.sender_name}>{message.sender}: </span>
            <span className={styles.text_message}>{message.text}</span>
          </div>
        ))}
      </div>
      <div className={styles.input_container}>
        <input type="text" placeholder='Новое сообщение' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
          <button onClick={handleSendMessage}>
            <div className={styles.svg_wrapper_1}>
              <div className={styles.svg_wrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                </svg>
              </div>
            </div>
          </button>
      </div>
    </div>
  )
}
