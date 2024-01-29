import React, { useState } from 'react';
import leftArrow from '../../assets/SquareAltArrowLeft.png';
import style from './css/PersonalDataSettings.module.css';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import DataInput from './components/DataInput';
import DropDown from './components/DropDown';
import UserInformationPage from './components/UserInformationPage';

function PersonalDataSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const [surName, setSurName] = useState('Малышко');
  const [name, setName] = useState('Дмитрий');
  const [gender, setGender] = useState('Мужской');
  const [telephon, setTelephon] = useState('+7(912)566-70-07');
  const [email, setEmail] = useState('email@yandex.com');
  const [date, setDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const navigate = useNavigate();
  console.log(date);
  const onChange = (newDate: Date) => {
    setDate(newDate);
    setShowCalendar(false); // Закрывает календарь после выбора даты
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleMen = () => {
    setGender('Мужской');
    setIsOpen(false);
  };
  const handleWomen = () => {
    setGender('Женский');
    setIsOpen(false);
  };

  const handleСhanges = () => {};
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
          <input type="name" value={surName} />
        </div>
        <div className={style.input_box}>
          <input type="surname" value={name} />
        </div>
        <DropDown
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
          gender={gender}
          handleMen={handleMen}
          handleWomen={handleWomen}
        />
        <div className={style.input_box}>
          <input type="telephon" value={telephon} />
        </div>
        <div className={style.input_box}>
          <input type="email" value={email} />
        </div>
        <DataInput
          date={date}
          showCalendar={showCalendar}
          setShowCalendar={setShowCalendar}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default PersonalDataSettings;
