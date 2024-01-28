import React from 'react';
import ToggleSwitch from '../../../components/ToggleSwitch/ToggleSwitch';
import rightArrow from '../../../assets/rightArrow.png';
import style from '../css/UserProfileSettings.module.css'

function AccountSettings() {
    return (
       <>
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
       </>
    );
}

export default AccountSettings;