import React, { memo } from 'react';
import style from '../css/AppInfoPage.module.css'
import rightArrow from '../../../assets/rightArrow.png';

function AppInfoLinks() {
    return (
        <>
        <div className={style.appInfo}>
        <div className={style.appInfo_box}>
          <span>Сведения о разработчике</span>
          <div className={style.appInfo_img}>
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <div className={style.appInfo_box}>
          <span>Политика конфедициальности</span>
          <div className={style.appInfo_img}>
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <div className={style.appInfo_box}>
          <span>Правила пользования</span>
          <div className={style.appInfo_img}>
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>
        </>
    );
}

export default memo(AppInfoLinks);