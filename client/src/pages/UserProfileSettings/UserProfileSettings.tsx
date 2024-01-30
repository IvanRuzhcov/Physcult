import React from 'react';
import leftArrow from '../../assets/SquareAltArrowLeft.png';

import style from './css/UserProfileSettings.module.css';
import { useNavigate } from 'react-router-dom';
import UserSettings from './components/UserSettings';
import AccountSettings from './components/AccountSettings';
import AccountManagement from './components/AccountManagement';

function UserProfileSettings() {
  const navigate = useNavigate();

  return (
    <div className={style.settingsContainer}>
      <div className={style.settingsHeader}>
        <div className={style.exitingSettings} onClick={() => navigate(-1)}>
          <img src={leftArrow} alt="" />
        </div>
        <span>Настройки</span>
      </div>
      <UserSettings />
      <AccountSettings />
      <AccountManagement />
    </div>
  );
}

export default UserProfileSettings;
