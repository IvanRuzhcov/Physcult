import React from 'react';
import style from './css/ToggleSwitch.module.css'

function ToggleSwitch() {
  return (
    <>
      <input type="checkbox" id="toggle" className={style.checkbox} />
      <label htmlFor="toggle" className={style.switch}></label>
    </>
  );
}

export default ToggleSwitch;
