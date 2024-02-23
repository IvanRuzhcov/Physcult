import React, { memo, useState } from 'react';
import photoCamera from '../../../assets/awards/camera.png';
import style from '../css/PersonalDataSettings.module.css';
import noPhoto from '../../../assets/no_avatar.png';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../../../store';

function UserInformationPage({setSelectedFile}:any) {
  const user = useSelector((store: RootState) => store.auth.user);

  console.log(user?.avatar_img);


  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

 

  return (
    <>
      <div className={style.user_information}>
        <div className={style.user_photo}>
          <div className={style.fon}>
          <div className={style.input_file}>
            <label htmlFor="fileInput" className={style.img_photo_camera}>
              <img src={photoCamera} alt="" />
            </label>
            <input
              id="fileInput"
              type="file"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </div>
          </div>
          <img className={style.img_user} src={user?.avatar_img || noPhoto} alt="" />
        </div>
        <div className={style.personal_information}>
          <div className={style.user_name}>{user?.name ?`${user?.name} ${user?.surname}`: 'Твое имя'}</div>
          <div className={style.user_nikc}>{user?.nick}</div>
        </div>
      </div>
    </>
  );
}

export default memo(UserInformationPage);
