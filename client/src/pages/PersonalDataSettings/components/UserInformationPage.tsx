import React, { memo } from 'react';
import style from '../css/PersonalDataSettings.module.css';
import malyshko from '../../../assets/malyshko.png';
import noPhoto from '../../../assets/no_avatar.png'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

function UserInformationPage() {
  const user = useSelector((store: RootState) => store.auth.user);
 
  return (
    <>
      <div className={style.user_information}>
        <div className={style.user_photo}>
          <img src={user?.avatar_img? user.avatar_img : noPhoto} alt="" />
        </div>
        <div className={style.personal_information}>
          <div className={style.user_name}>{user?.name ? user.name: 'Твое имя'}</div>
          <div className={style.user_nikc}>{user?.nick}</div>
        </div>
      </div>
    </>
  );
}

export default memo(UserInformationPage);
