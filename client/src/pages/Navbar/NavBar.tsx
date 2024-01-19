import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('home');

  const handleWews = () => {
    navigate('/news');
    setActivePage('fire');
  };

  return (
    <div className={style.navbar}>
      <div className={style.icons} onClick={handleWews}>
        <img src={activePage === 'fire' ? Fire : offFire} alt="" />
      </div>

      <div className={style.icons} onClick={() => setActivePage('earth')}>
        <img src={activePage === 'earth' ? earth : offEarth} alt="" />
      </div>

      <div
        className={`${style.icons} ${style.icons_play}`}
        onClick={() => setActivePage('play')}
      >
        <img src={activePage === 'play' ? play : offPlay} alt="" />
      </div>

      <div className={style.icons} onClick={() => setActivePage('chat')}>
        <img src={activePage === 'chat' ? chat : offChat} alt="" />
      </div>

      <div className={style.icons} onClick={() => setActivePage('user')}>
        <img
          src={activePage === 'user' ? userRounded : offUserRounded}
          alt=""
        />
      </div>
    </div>
  );
}

export default NavBar;
