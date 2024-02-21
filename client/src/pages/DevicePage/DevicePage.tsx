import React from 'react';
import style from './css/DevicePage.module.css';
import leftArrow from '../../assets/SquareAltArrowLeft.png';
import rightArrow from '../../assets/rightArrow.png';
import { useNavigate } from 'react-router-dom';

function DevicePage() {
  const navigate = useNavigate();
  return (
    <div className={style.device_container}>
      <div className={style.header_device}>
        <div className={style.left_arrow} onClick={() => navigate('/settings')}>
          <img src={leftArrow} alt="" />
        </div>
        <span>Устройства</span>
      </div>
      <div className={style.container}>
      <div className={style.device}>
        <div className={style.device_box}>
          <span>AppleWatch</span>
          <div className={style.device_img}>
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <div className={style.device_box}>
          <span>Garmin</span>
          <div className={style.device_img}>
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>
      <div className={style.btn_adding_device}>
        <div>Добавить устройство</div>
      </div>
      </div>
    </div>
  );
}

export default DevicePage;
