import React, { useEffect, useState } from 'react';
import style from './css/NavBar.module.css';
import offFire from '../../assets/icons/offFire.png';
import Fire from '../../assets/icons/Fire.png';
import offEarth from '../../assets/icons/offEarth.png';
import earth from '../../assets/icons/Earth.png';
import play from '../../assets/icons/play.png';
import offPlay from '../../assets/icons/offplay.png';
import offChat from '../../assets/icons/offChat.png';
import chat from '../../assets/icons/chat.png';
import offUserRounded from '../../assets/icons/offUserRounded.png';
import userRounded from '../../assets/icons/userRounded.png';
import logo from '../../assets/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState('fire');

  useEffect(() => {
    const path = location.pathname;

    if (path === '/news') {
      setActivePage('fire');
    } else if (path === '/profile') {
      setActivePage('user');
    } else if (path === '/main') {
      setActivePage('main');
    }
  }, [location.pathname]);

  const handleNews = () => {
    navigate('/news');
  };

  const handleProfile = () => {
    navigate('/profile');
  };
  const handleMain = () => {
    navigate('/');
  };

  return (
    <div className={style.navbar}>
      <div className={style.navbar_feed}>
        <div className={style.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={style.icons} onClick={handleNews}>
          <img src={activePage === 'fire' ? Fire : offFire} alt="" />
          <span>Новости</span>
        </div>

        <div className={style.icons} onClick={handleMain}>
          <img src={activePage === 'main' ? earth : offEarth} alt="" />
          <span>Главная</span>
        </div>

        <div
          className={`${style.icons} ${style.icons_play}`}
          onClick={() => setActivePage('play')}
        >
          <img src={activePage === 'play' ? play : offPlay} alt="" />
          <span>Тренировка</span>
        </div>

        <div className={style.icons} onClick={() => setActivePage('chat')}>
          <img src={activePage === 'chat' ? chat : offChat} alt="" />
          <span>Сообщения </span>
        </div>

        <div className={style.icons} onClick={handleProfile}>
          <img
            src={activePage === 'user' ? userRounded : offUserRounded}
            alt=""
          />
          <span>Профиль</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
