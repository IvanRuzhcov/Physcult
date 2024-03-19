import React, { memo, useEffect, useState } from 'react';
import leftArrow from '../../assets/SquareAltArrowLeft.png';
import style from './css/PersonalDataSettings.module.css';
import { useNavigate } from 'react-router-dom';
import DropDown from './components/DropDown';
import UserInformationPage from './components/UserInformationPage';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import DataInput from './components/DataInput';
import { updataUser } from '../PersonalPage/userAuthSlice';
import axios from 'axios';

function PersonalDataSettings() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useSelector((store: RootState) => store.auth.user);

  const [surname, setSurName] = useState<string>(user?.surname || '');
  const [name, setName] = useState<string>(user?.name || '');
  const [gender, setGender] = useState<string>(user?.gender || 'Пол');
  const [nick, setNick] = useState<string>(user?.nick || '');
  const [telephone, setTelephon] = useState<string>(user?.telephone || '');
  const [email, setEmail] = useState<string>(user?.email || '');
  const [date_of_birth, setDate] = useState<string>(user?.date_of_birth || '');
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(selectedFile)
  useEffect(() => {
    if (user) {
      setSurName(user.surname || '');
      setName(user.name || '');
      setGender(user.gender || 'Пол');
      setNick(user.nick || '');
      setTelephon(user.telephone || '');
      setEmail(user.email || '');
      setDate(user.date_of_birth || '');
    }
  }, [user]);
  // ипортируем изменения юзера
  const handleСhanges = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const action = await dispatch(
        updataUser({
          id: user?.id,
          surname,
          name,
          gender,
          nick,
          telephone,
          email,
          date_of_birth,
        })
      );

      // Добавление фотографий

      if (!selectedFile) {
        return;
      }
      const formData = new FormData();

      formData.append('avatar', selectedFile);
      // Фактический запрос к серверу
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <div className={style.personal_settings_container}>
      <div className={style.header_settings}>
        <div className={style.left_arrow} onClick={() => navigate('/settings')}>
          <img src={leftArrow} alt="" />
        </div>
        <span>Личные данные</span>
        <div className={style.confirmation} onClick={handleСhanges}>
          Готово
        </div>
      </div>
      <div className={style.container}>
        <UserInformationPage setSelectedFile={setSelectedFile} />
        <div className={style.input_container}>
          <div className={style.input_box}>
            <input
              type="surname"
              value={surname}
              placeholder="Фамилия"
              onChange={(e) => setSurName(e.target.value)}
            />
          </div>
          <div className={style.input_box}>
            <input
              type="name"
              value={name}
              placeholder="Имя"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={style.input_box}>
            <input
              type="nick"
              value={nick}
              placeholder="Ник"
              onChange={(e) => setNick(e.target.value)}
            />
          </div>
          <DropDown gender={gender} setGender={setGender} />
          <div className={style.input_box}>
            <input
              type="telephon"
              value={telephone}
              placeholder="Телефон"
              onChange={(e) => setTelephon(e.target.value)}
            />
          </div>
          <div className={style.input_box}>
            <input
              type="email"
              value={email}
              placeholder="Почта"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <DataInput setDate={setDate} date_of_birth={date_of_birth} />
        </div>
      </div>
    </div>
  );
}

export default memo(PersonalDataSettings);
