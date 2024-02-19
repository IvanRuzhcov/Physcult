import React, { memo, useState } from 'react';
import style from '../css/PersonalDataSettings.module.css';
import noPhoto from '../../../assets/no_avatar.png';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../../../store';


function UserInformationPage() {
  
  
  const user = useSelector((store: RootState) => store.auth.user);

  console.log( user?.avatar_img )



  const [selectedFile, setSelectedFile] = useState(null);


  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('Файл не выбран');
      return;
    }
    try {
      const formData = new FormData();

      formData.append('avatar', selectedFile);
      // Фактический запрос к серверу
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Файл успешно загружен');
    } catch (error) {
      console.log('Произошла ошибка при загрузке файла:', error);
    }
  };

  return (
    <>
      <div className={style.user_information}>
        <div className={style.user_photo}>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>кнопка</button>
          <img src={user?.avatar_img || noPhoto} alt="" />
        </div>
        <div className={style.personal_information}>
          <div className={style.user_name}>
            {user?.name ? user.name : 'Твое имя'}
          </div>
          <div className={style.user_nikc}>{user?.nick}</div>
        </div>
      </div>
    </>
  );
}

export default memo(UserInformationPage);
