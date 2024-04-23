import React, { useEffect, useMemo } from 'react';
import NavBar from '../Navbar/NavBar';
import Search from './components/Search';
import styles from './css/Messenger.module.css';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import ChatNavBar from './components/ChatNavBar';
import { useNavigate } from 'react-router-dom';
import { initSubscribers, initSubscription } from '../PersonalPage/userAuthSlice';

export default function Messenger(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initSubscription(Number(user?.id)));
    dispatch(initSubscribers(Number(user?.id)));
  }, [dispatch, user?.id]);


  const subscriptions = useSelector(
    (store: RootState) => store.auth.subscription
  );
  const users = useSelector((store: RootState) => store.auth.allUsers);

const subscribedUsers = useMemo(() => {
  return users.filter((user) =>
    Array.isArray(subscriptions) && subscriptions.some(
      (subscription) => subscription.subscribe_id === user.id
    )
  );
}, [users, subscriptions]);


  return (
    <div className={styles.container}>
      <div className={styles.container_data}>
      <div className={styles.title}>
        <span className={styles.title_name}>Чат</span>
      </div>

      <Search />
      <ChatNavBar />

      <div className={styles.line} ></div>

      <div className={styles.chat_container}>
        {subscribedUsers.map((chat) => {
          return (
            <>
              <div
                key={chat.id}
                className={styles.chat_box}
                onClick={() => navigate(`/messenger/${chat.id}`)}
              >
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

      {/* <div className={style.input_container}>
        <input type="text" placeholder='Новое сообщение'  />
        <button id="sendButton" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="33.67" stroke="#6c6c6c" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888" ></path>
          </svg>
        </button> 
      </div> */}

    </div>
      <NavBar />
    </div>
  );
}
