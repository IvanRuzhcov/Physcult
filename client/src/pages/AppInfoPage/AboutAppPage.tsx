import React from 'react';
import leftArrow from '../../assets/SquareAltArrowLeft.png';
import style from './css/AppInfoPage.module.css';
import { useNavigate } from 'react-router-dom';
import AppInfoLinks from './components/AppInfoLinks';
import SocialNetworkList from './components/SocialNetworkList';

function AppInfoPage() {
  const navigate = useNavigate();
  return (
    <div className={style.appInfo_container}>
      <div className={style.header_appInfo}>
        <div className={style.left_arrow} onClick={() => navigate(-1)}>
          <img src={leftArrow} alt="" />
        </div>
        <span>О приложении</span>
      </div>
      <AppInfoLinks />
      <div className={style.link}>
        <a href="/">physcult.pro</a>
      </div>
      <SocialNetworkList />
    </div>
  );
}

export default AppInfoPage;