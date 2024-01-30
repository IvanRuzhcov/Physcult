import React, { useState } from 'react';
import ToggleSwitch from '../../../components/ToggleSwitch/ToggleSwitch';
import rightArrow from '../../../assets/rightArrow.png';

import style from '../css/UserProfileSettings.module.css';
import { useNavigate } from 'react-router-dom';
import ModalContact from './ModalContact';

function AccountSettings() {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className={style.accountSettings}>
        <div className={style.settings}>
          <span>Уведомления</span>
          <ToggleSwitch />
        </div>
        <div
          className={style.settings}
          onClick={() => navigate('/settings/device')}
        >
          <span>Устройства</span>
          <div>
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <div
          className={style.settings}
          onClick={() => navigate('/settings/interface')}
        >
          <span>Интерфейс</span>
          <div>
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <div className={style.settings} onClick={handleModal}>
          <span>Поддержка</span>
          <div>
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <div
          className={style.settings}
          onClick={() => navigate('/settings/app information')}
        >
          <span>О приложении</span>
          <div>
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <ModalContact modal={modal} handleModal={handleModal} />
      </div>
    </>
  );
}

export default AccountSettings;
