import React, { memo } from 'react';
import style from '../css/PersonalDataSettings.module.css'
import malyshko from '../../../assets/malyshko.png';


function UserInformationPage() {
    const User = {
        id: 1,
        name: 'Дмитрий Малышко',
        photo: malyshko,
        nick: '@malyshko',
        telephone: '+7(912)566-70-07',
      };
    return (
        <>
         <div className={style.user_information}>
        <div className={style.user_photo}>
          <img src={User.photo} alt="" />
        </div>
        <div className={style.personal_information}>
          <div className={style.user_name}>{User.name}</div>
          <div className={style.user_nikc}>{User.nick}</div>
        </div>
      </div>
        </>
    );
}

export default memo(UserInformationPage);