import React, { useState } from 'react';
import ToggleSwitch from '../../../components/ToggleSwitch/ToggleSwitch';
import rightArrow from '../../../assets/rightArrow.png';
import redirectToMessenger from '../../../assets/RedirectToMessenger.png';
import letter from '../../../assets/Letter.png';
import reviewsAdd from '../../../assets/ReviewsAdd.png';
import style from '../css/UserProfileSettings.module.css';
import { useNavigate } from 'react-router-dom';

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

        <div className={modal ? style.module_activ : style.modal}>
          <div className={style.modal_backgraund} onClick={handleModal}></div>
          <div className={style.modal_body}>
            <div className={style.contact_methods}>
              <div className={style.contact_method}>
                <img src={redirectToMessenger} alt="" />
                <span>Связаться в мессенджере</span>
              </div>
              <div className={style.contact_method}>
                <img src={letter} alt="" />
                <span>Связаться по e-mail</span>
              </div>
              <div className={style.contact_method}>
                <img src={reviewsAdd} alt="" />
                <span>Оставить отзыв</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountSettings;
