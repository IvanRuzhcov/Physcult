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

function PersonalDataSettings() {
  const dispatch = useAppDispatch();

  const user = useSelector((store: RootState) => store.auth.user);
  console.log(user);

  const [surname, setSurName] = useState<string>(user?.surname || '');
  const [name, setName] = useState<string>(user?.name || '');
  const [gender, setGender] = useState<string>(user?.gender || 'Пол');
  const [nick, setNick] = useState<string>(user?.nick || '');
  const [telephone, setTelephon] = useState<string>(user?.telephone || '');
  const [email, setEmail] = useState<string>(user?.email || '');
  
  console.log(email);
  const [date_of_birth, setDate] = useState<string>(user?.date_of_birth || '');
  const navigate = useNavigate();

  const handleСhanges = async () => {
    try {
      const action = await dispatch(
        updataUser({ id: user?.id, surname,name,gender,nick,telephone,email,date_of_birth})
      )
    } catch (error) {
      console.error('Произошла ошибка при изменении:', error);
    }
  
  };
  return (
    <div className={style.personal_settings_container}>
      <div className={style.header_settings}>
        <div className={style.left_arrow} onClick={() => navigate(-1)}>
          <img src={leftArrow} alt="" />
        </div>
        <span>Личные данные</span>
        <div className={style.confirmation} onClick={handleСhanges}>
          Готово
        </div>
      </div>
      <UserInformationPage />
      <div className={style.input_container}>
        <div className={style.input_box}>
          <input type="surname" value={surname} placeholder="Фамилия" onChange={(e)=> setSurName(e.target.value)}/>
        </div>
        <div className={style.input_box}>
          <input type="name" value={name} placeholder="Имя" onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div className={style.input_box}>
          <input type="nick" value={nick} placeholder="Ник" onChange={(e)=> setNick(e.target.value)}/>
        </div>
        <DropDown gender={gender} setGender={setGender} />
        <div className={style.input_box}>
          <input type="telephon" value={telephone} placeholder="Телефон" onChange={(e)=> setTelephon(e.target.value)}/>
        </div>
        <div className={style.input_box}>
          <input type="email" value={email} placeholder="Почта" onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <DataInput setDate={setDate} />
      </div>
    </div>
  );
}

export default memo(PersonalDataSettings);
