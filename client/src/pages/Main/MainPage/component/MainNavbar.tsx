import React, { useEffect, useState } from 'react';
import styles from '../css/MainPage.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

function MainNavbar() {
  const [activeBtn, setActiveBtn] = useState('main');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path === '/main') {
      setActiveBtn('main');
    } else if (path === '/trials') {
      setActiveBtn('trials');
    } else if (path === '/friend') {
      setActiveBtn('friend');
    }
  }, [location.pathname]);

  const handleMain = () => {
    setActiveBtn('main');
    navigate('/main');
  };
  const handleTests = () => {
    setActiveBtn('trials');
    navigate('/trials');
  };
  const handleFriends = () => {
    setActiveBtn('friend');
    navigate('/friend');
  };
  return (
    <>
      <div className={styles.user_navbar}>
        <div className={styles.publications_box} onClick={handleMain}>
          <div
            className={
              activeBtn === 'main'
                ? styles.on_publications
                : styles.off_publications
            }
          >
            Главная
          </div>
          <div
            className={activeBtn === 'main' ? styles.active_line : styles.line}
          ></div>
        </div>
        <div className={styles.progress_box} onClick={handleTests}>
          <div
            className={
              activeBtn === 'trials' ? styles.on_progress : styles.off_progress
            }
          >
            Испытания
          </div>
          <div
            className={
              activeBtn === 'trials' ? styles.active_line : styles.line
            }
          ></div>
        </div>
        <div className={styles.friend_box} onClick={handleFriends}>
          <div
            className={
              activeBtn === 'friend' ? styles.on_friend : styles.off_friend
            }
          >
            Друзья
          </div>
          <div
            className={
              activeBtn === 'friend' ? styles.active_line : styles.line
            }
          ></div>
        </div>
      </div>
    </>
  );
}

export default MainNavbar;
