import React from 'react';
import removal from '../../../assets/delete.png';
import exit from '../../../assets/exit.png';
import style from '../css/UserProfileSettings.module.css';
import { useAppDispatch } from '../../../store';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../PersonalPage/userAuthSlice';

function AccountManagement() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const deleteCookie = (name:string, domain:string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`;
  };

  const handleLogout = async () => {
    try {
      const action = await dispatch(logoutUser());

      if (logoutUser.fulfilled.match(action)) {
        navigate('/');
      }
      deleteCookie('flow.polar.com', 'flow.polar.com');
      deleteCookie('polar.com', 'polar.com');
    } catch (error) {
      console.error('Произошла ошибка при выходе из системы:', error);
      // Обработка других ошибок при необходимости
    }
  };

  return (
    <>
      <div className={style.accountManagement}>
        <div className={style.logoutOption} onClick={handleLogout}>
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
