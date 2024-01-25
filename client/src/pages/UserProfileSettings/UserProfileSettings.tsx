import React from 'react';
import leftArrow from '../../assets/SquareAltArrowLeft.png';
import rightArrow from '../../assets/rightArrow.png';
import malyshko from '../../assets/malyshko.png';
import removal from '../../assets/delete.png';
import exit from '../../assets/exit.png'
import style from './css/UserProfileSettings.module.css';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';

function UserProfileSettings() {
  const User = {
    id: 1,
    name: 'Дмитрий Малышко',
    photo: malyshko,
    nick: '@malyshko',
    telephone: '+7(912)566-70-07',
    distance: '19,69',
    pace: '5:19',
    time: '1ч. 44мин.',
    medals_gold: 2,
    medals_silver: 2,
    medals_bronze: 1,
    date: '14.10.2023',
    time_post: '12:32',
    description:
      'Сегодня впервые вместе с семьей на лыжах, даже малыш открыл для себя этот веселый вид активности!',
    like: 9.8,
    comments: 9.8,
    subscriptions: 8,
    subscribers: 8,
  };

  return (
    <div className={style.settingsContainer}>
      <div className={style.settingsHeader}>
        <div className={style.exitingSettings}>
          <img src={leftArrow} alt="" />
        </div>
        <span>Настройки</span>
      </div>
      <div className={style.userSettings}>
        <div className={style.userPhoto}>
          <img src={User.photo} alt="" />
        </div>
        <div className={style.personalInformation}>
          <div className={style.userName}>{User.name}</div>
          <div className={style.userNikc}>{User.nick}</div>
          <div className={style.userTelephone}>{User.telephone}</div>
        </div>
        <div>
          <img src={rightArrow} alt="" />
        </div>
      </div>
      <div className={style.accountSettings}>
        <div className={style.settings}>
          <span>Уведомления</span>
          <ToggleSwitch/>
        </div>
        <div className={style.settings}>
          <span>Устройства</span>
          <div>
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <div className={style.settings}>
          <span>Интерфейс</span>
          <div>
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <div className={style.settings}>
          <span>Поддержка</span>
          <div>
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <div className={style.settings}>
          <span>О приложении</span>
          <div>
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>
      <div className={style.accountManagement}>
        <div className={style.logoutOption}>
          <div> <img src={exit} alt="" /></div>
          <span>Выйти из аккаунта</span>
        </div>
        <div className={style.deleteAccountOption}>
        <div> <img src={removal} alt="" /></div>
          <span>Удалить аккаунт</span>
        </div>
      </div>
    </div>
  );
}

export default UserProfileSettings;
