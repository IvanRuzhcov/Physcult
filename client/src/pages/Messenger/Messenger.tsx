import React, {useState} from 'react'
import NavBar from '../Navbar/NavBar';
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
  const [isClicked, setIsClicked] = useState<string>('');


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

        <div className={styles.nav_btn_group}>
          <button className={`${styles.trials_btn} ${isClicked === 'all'? styles.clicked : ''}`} onClick={() => setIsClicked('all')}><span>Все</span></button>
          <button className={`${styles.trials_btn} ${isClicked === 'phy'? styles.clicked : ''}`} onClick={() => setIsClicked('phy')}><span>Physcult</span></button>
          <button className={`${styles.trials_btn} ${isClicked === 'sky'? styles.clicked : ''}`} onClick={() => setIsClicked('sky')}><span>Лыжи</span></button> 
          <button className={`${styles.trials_btn} ${isClicked === 'run'? styles.clicked : ''}`} onClick={() => setIsClicked('run')}><span>Бег</span></button>
          <button className={`${styles.trials_btn} ${isClicked === 'bck'? styles.clicked : ''}`} onClick={() => setIsClicked('bck')}><span>Велосипед</span></button>
          <button className={`${styles.trials_btn} ${isClicked === 'tre'? styles.clicked : ''}`} onClick={() => setIsClicked('tre')}><span>Тренеры</span></button>
        </div>

        <div className={styles.line}></div>

      
        {messages.map(message => (
            <div className={styles.message} key={message.id}>
              <span className={styles.sender_name}>{message.sender}: </span>
              <span className={styles.text_message}>{message.text}</span>
            </div>
        ))}
      
      <div className={styles.input_container}>
        <input type="text" placeholder='Новое сообщение' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button id="sendButton" onClick={handleSendMessage}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
            <path fill="none" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"  ></path>
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="33.67" stroke="#6c6c6c" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888" ></path>
          </svg>
        </button> 
      </div>
      <NavBar/>
    </div>
  )
}
