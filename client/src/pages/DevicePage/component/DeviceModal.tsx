import React from 'react';
import style from '../css/DevicePage.module.css';
import polar from '../../../assets/ devices/polar.png';
import garmin from '../../../assets/ devices/garmin.png';

type NewDev = {
  newDev: boolean;
  setNewDev: React.Dispatch<React.SetStateAction<boolean>>;
};

function DeviceModal({ newDev, setNewDev }: NewDev) {
  const syncWithPolar = async () => {
    const polarAuthorizationUrl = `https://flow.polar.com/oauth2/authorization?response_type=code&client_id=328ae2d4-c843-4189-9d01-72d165130543`;
    window.location.href = polarAuthorizationUrl;

    const randomParam = Math.random().toString(36).substring(7);
    window.location.href = `${polarAuthorizationUrl}&nocache=${randomParam}`;

    const code = new URLSearchParams(window.location.search).get('code');
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await fetch('/polar/sync', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      // Обработка успешного ответа от сервера
    } catch (error) {
      console.error('Ошибка при синхронизации с Polar:', error);
    }
  };

  return (
    <>
      <div className={newDev ? style.module_activ : style.modal}>
        <div
          className={style.modal_backgraund}
          onClick={() => setNewDev(false)}
        ></div>
        <div className={style.modal_body}>
          <div className={style.modal_header}>
            <span>Загрузить и синхронизировать тренировки</span>
          </div>
          <div className={style.devices}>
            <div className={style.device} onClick={syncWithPolar}>
              <img src={polar} alt="" />
            </div>
            <div className={style.device}>
              <img src={garmin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeviceModal;
