import React from 'react';
import style from './css/ToggleSwitch.module.css'

function ToggleSwitch() {
  return (
    <div className={style.container}>
  <input type="checkbox" className={style.checkbox} id="checkbox"/>
  <label className={style.switch} htmlFor="checkbox">
    <span className={style.slider}></span>
  </label>
</div>
   
  );
}

export default ToggleSwitch;
