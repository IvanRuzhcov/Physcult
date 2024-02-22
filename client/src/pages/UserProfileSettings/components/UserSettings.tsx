import React, { memo } from 'react';
import malyshko from '../../../assets/malyshko.png';
import rightArrow from '../../../assets/rightArrow.png';
import noPhoto from '../../../assets/no_avatar.png'
import style from '../css/UserProfileSettings.module.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

function UserSettings() {
  const user = useSelector((store:RootState)=> store.auth.user)
const navigate = useNavigate()
console.log(user)

      const handleRedirectSettingsProfil = () =>{
        navigate('/settings/personal')
      }
    return (
        <>
        <div className={style.userSettings} onClick={handleRedirectSettingsProfil}>
        <div className={style.user_photo}>
          <img src={user?.avatar_img || noPhoto} alt="" />
        </div>
        <div className={style.personalInformation}>
          <div className={style.userName}>{user?.name}</div>
          <div className={style.userNikc}>{user?.nick}</div>
          <div className={style.userTelephone}>{user?.telephone}</div>
        </div>
        <div>
          <img src={rightArrow} alt="" />
        </div>
      </div>
        </>
    );
}

export default memo(UserSettings);