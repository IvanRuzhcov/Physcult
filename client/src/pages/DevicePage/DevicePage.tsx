import style from './css/DevicePage.module.css';
import leftArrow from '../../assets/SquareAltArrowLeft.png';
import rightArrow from '../../assets/rightArrow.png';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import DeviceModal from './component/DeviceModal';

function DevicePage() {
  const [newDev, setNewDev] = useState(false);

  const polarDev = useSelector((store: RootState) => store.device.polar);

  useEffect(() => {
    const withPolar = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = await fetch('/polar/auth', {
          method: 'POST',
        });
      } catch (error) {
        console.error('Ошибка при синхронизации с Polar:', error);
      }
    };

    withPolar();
  }, []);

  const navigate = useNavigate();

  return (
    <div className={style.device_container}>
      <div className={style.header_device}>
        <div className={style.left_arrow} onClick={() => navigate('/settings')}>
          <img src={leftArrow} alt="" />
        </div>
        <span>Устройства</span>
      </div>
      <div className={style.container}>
        <div className={style.synchronized}>
          {/* <div className={style.device_box}>
            <span>AppleWatch</span>
            <div className={style.device_img}>
              <img src={rightArrow} alt="" />
            </div>
          </div> */}
          {/* <div className={style.device_box} >
            <span>Garmin</span>
            <div className={style.device_img}>
              <img src={rightArrow} alt="" />
            </div>
          </div> */}
          {polarDev && (
            <>
              <div
                className={style.device_box}
                onClick={() =>
                  navigate(`/settings/device/polar/${polarDev.user_id}`)
                }
              >
                <span>Polar</span>
                <div className={style.device_img}>
                  <img src={rightArrow} alt="" />
                </div>
              </div>
            </>
          )}
        </div>
        <div
          className={style.btn_adding_device}
          onClick={() => setNewDev(!newDev)}
        >
          <div>Добавить устройство</div>
        </div>
      </div>
      <DeviceModal newDev={newDev} setNewDev={setNewDev} />
    </div>
  );
}

export default DevicePage;
