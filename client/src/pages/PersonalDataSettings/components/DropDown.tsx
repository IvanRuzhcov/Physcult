import React, { MouseEventHandler, memo } from 'react';
import style from '../css/PersonalDataSettings.module.css';
import downArrow from '../../../assets/downArrow.png';


type DropDownType ={
    isOpen:boolean,
    toggleDropdown:MouseEventHandler<HTMLDivElement> | undefined
    gender:string
    handleMen:MouseEventHandler<HTMLDivElement> | undefined
    handleWomen:MouseEventHandler<HTMLDivElement> | undefined
}


function DropDown({ isOpen, toggleDropdown, gender, handleMen, handleWomen }:DropDownType) {
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
