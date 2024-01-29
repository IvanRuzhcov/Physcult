import React, { memo } from 'react';
import redirectToMessenger from '../../../assets/RedirectToMessenger.png';
import letter from '../../../assets/Letter.png';
import reviewsAdd from '../../../assets/ReviewsAdd.png';
import style from '../css/UserProfileSettings.module.css';
interface ModalContactProps {
  modal: boolean;
  handleModal: () => void;
}

function ModalContact({ modal, handleModal }: ModalContactProps) {
  return (
    <>
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
    </>
  );
}

export default memo(ModalContact);
