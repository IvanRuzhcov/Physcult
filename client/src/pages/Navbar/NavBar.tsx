import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { Flame, Users, MapPinned, MessageSquareText, User } from 'lucide-react';
import style from './css/NavBar.module.css';

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
    } else if (path === '/map') {
      setActivePage('play')
    } else if (path === '/messenger') {
      setActivePage('chat')
    }
  }, [location.pathname]);

  const handleNews = () => {
    navigate('/news');
  };

  const handleProfile = () => {
    navigate('/profile');
  };
  const handleMain = () => {
    navigate('/main');
  };
  const handlePlay = () => {
    navigate('/map')
  }
  const handleChat = () => {
    navigate('/messenger')
  }
  
  return (
    <div className={style.navbar}>
      <div className={style.navbar_feed}>
        <div className={style.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={style.icons} onClick={handleNews}>
        { activePage === 'fire' ?<Flame size={38} strokeWidth={2} color="#ff0606"/>:
        <Flame size={38} strokeWidth={1.75} color="#778c96"/>}
          <span>Новости</span>
        </div>

        <div className={style.icons} onClick={handleMain}>
          {activePage === 'main' ? <Users size={38} strokeWidth={2} color="#ff0606"/>:
          <Users size={38} strokeWidth={1.75} color="#778c96"/>}
          <span>Главная</span>
        </div>

        <div className={`${style.icons} ${style.icons_play}`}  onClick={handlePlay} >
          {activePage === 'play' ?<MapPinned size={38} strokeWidth={2} color="#ff0606"/>:
          <MapPinned size={38} strokeWidth={1.75} color="#778c96"/>}
          <span>Тренировка</span>
        </div>

        <div className={style.icons} onClick={handleChat}>
          {activePage === 'chat' ?<MessageSquareText size={38} strokeWidth={2} color="#ff0606"/>:
          <MessageSquareText size={38} strokeWidth={1.75} color="#778c96"/>}
          <span>Сообщения </span>
        </div>

        <div className={style.icons} onClick={handleProfile}>
          {activePage === 'user' ?<User size={38} strokeWidth={2} color="#ff0606"/>:
          <User size={38} strokeWidth={1.75} color="#778c96"/>}
          <span>Профиль</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
