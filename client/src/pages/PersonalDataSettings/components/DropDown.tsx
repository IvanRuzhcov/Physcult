import React, { MouseEventHandler, memo, useState } from 'react';
import style from '../css/PersonalDataSettings.module.css';
import downArrow from '../../../assets/downArrow.png';

type DropDownType = {
  gender: string | undefined;
  setGender: React.Dispatch<React.SetStateAction<string>>;
};

function DropDown({ gender, setGender }: DropDownType) {
  const [isOpen, setIsOpen] = useState(false);

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
  return (
    <>
      <div
        className={!isOpen ? style.select_box : style.select_box_open}
        onClick={toggleDropdown}
      >
        <div
          className={!isOpen ? style.selekt_text : style.selekt_text_open}
          onClick={toggleDropdown}
        >
          {gender}
        </div>
        <img src={downArrow} alt="" />
      </div>
      {isOpen && (
        <div className={style.option_box}>
          <div className={style.options} onClick={handleMen}>
            Мужской
          </div>
          <div className={style.options} onClick={handleWomen}>
            Женский{' '}
          </div>
        </div>
      )}
    </>
  );
}

export default memo(DropDown);
