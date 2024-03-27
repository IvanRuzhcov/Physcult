import React, { useState } from 'react';
import NavBar from '../Navbar/NavBar';
import Search from './components/Search';
import styles from './css/Messenger.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ChatNavBar from './components/ChatNavBar';

export default function Messenger(): JSX.Element {
  const subscriptions = useSelector(
    (store: RootState) => store.auth.subscription
  );
  const users = useSelector((store: RootState) => store.auth.allUsers);

  const subscribedUsers = users.filter((user) =>
    subscriptions.some((subscription) => subscription.subscribe_id === user.id)
  );
  console.log(subscribedUsers);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.title_name}>Чат</span>
      </div>

      <Search />

      <ChatNavBar />

      <div className={styles.line}></div>

      <div className={styles.chat_container}>
        {subscribedUsers.map((chat) => {
          return (
            <>
              <div className={styles.chat_box}>
                <div className={styles.chat_avatar_img}>
                  <img src={chat.avatar_img} alt="" />
                </div>
                <div
                  className={styles.chat_name}
                >{`${chat.name} ${chat.surname}`}</div>
              </div>
            </>
          );
        })}
      </div>

      {/* <div className={styles.input_container}>
        <input type="text" placeholder='Новое сообщение' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button id="sendButton" onClick={handleSendMessage}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
            <path fill="none" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"  ></path>
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="33.67" stroke="#6c6c6c" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888" ></path>
          </svg>
        </button> 
      </div> */}
      <NavBar />
    </div>
  );
}
