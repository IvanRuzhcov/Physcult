import React from 'react';
import malyshko from '../../../assets/malyshko.png';
import rightArrow from '../../../assets/rightArrow.png';
import style from '../css/UserProfileSettings.module.css'
import { useNavigate } from 'react-router-dom';

function UserSettings() {
const navigate = useNavigate()
    const User = {
        id: 1,
        name: 'Дмитрий Малышко',
        photo: malyshko,
        nick: '@malyshko',
        telephone: '+7(912)566-70-07',
        
      };
      const handleRedirectSettingsProfil = () =>{
        navigate('/settings/personal')
      }
    return (
        <>
        <div className={style.userSettings} onClick={handleRedirectSettingsProfil}>
        <div className={style.user_photo}>
          <img src={User.photo} alt="" />
        </div>
        <div className={style.personalInformation}>
          <div className={style.userName}>{User.name}</div>
          <div className={style.userNikc}>{User.nick}</div>
          <div className={style.userTelephone}>{User.telephone}</div>
        </div>
        <div>
          <img src={rightArrow} alt="" />
        </div>
      </div>
        </>
    );
}

export default UserSettings;