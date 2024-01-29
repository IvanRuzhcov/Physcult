import React from 'react';
import removal from '../../../assets/delete.png';
import exit from '../../../assets/exit.png';
import style from '../css/UserProfileSettings.module.css'

function AccountManagement() {
    return (
        <>
        <div className={style.accountManagement}>
        <div className={style.logoutOption}>
          <div>
            <img src={exit} alt="" />
          </div>
          <span>Выйти из аккаунта</span>
        </div>
        <div className={style.deleteAccountOption}>
          <div>
            <img src={removal} alt="" />
          </div>
          <span>Удалить аккаунт</span>
        </div>
      </div>
        </>
    );
}

export default AccountManagement;