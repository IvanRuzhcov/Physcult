import React from 'react';
import style from './css/InterfacePage.module.css';
import leftArrow from '../../assets/SquareAltArrowLeft.png';
import rightArrow from '../../assets/rightArrow.png';
import { useNavigate } from 'react-router-dom';

function InterfacePage() {
  const navigate = useNavigate();
  return (
    <div className={style.interface_container}>
      <div className={style.header_interface}>
        <div className={style.left_arrow} onClick={() => navigate(-1)}>
          <img src={leftArrow} alt="" />
        </div>
        <span>Интерфейс</span>
      </div>
      <div className={style.interface}>
        <div className={style.interface_box}>
          <span>Язык</span>
          <div className={style.interface_img}>
            <span>Русский</span>
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <div className={style.interface_box}>
          <span>Тема</span>
          <div className={style.interface_img}>
            <span>Светлая</span>
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterfacePage;
