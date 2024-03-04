import style from './css/DevicePage.module.css';
import leftArrow from '../../assets/SquareAltArrowLeft.png';
import rightArrow from '../../assets/rightArrow.png';
import { useNavigate } from 'react-router-dom';

function DevicePage() {
  const syncWithPolar = async () => {
    // Конфигурация запроса на получение кода авторизации
    const polarAuthorizationUrl =
      'https://flow.polar.com/oauth2/authorization?response_type=code&client_id=328ae2d4-c843-4189-9d01-72d165130543';
    window.location.href = polarAuthorizationUrl;
    const code = new URLSearchParams(window.location.search).get('code');
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await fetch('/polar/sync', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ code }),
      });
    } catch (error) {
      console.error('Ошибка при синхронизации с Polar:', error);
    }
  };
  const deleteWithPolar = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await fetch('/polar/delete', {
        method: 'DELETE',
      
      });
    } catch (error) {
      console.error('Ошибка при синхронизации с Polar:', error);
    }
  };


 

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
        <div className={style.device}>
          <div className={style.device_box}>
            <span>AppleWatch</span>
            <div className={style.device_img}>
              <img src={rightArrow} alt="" />
            </div>
          </div>
          <div className={style.device_box} >
            <span>Garmin</span>
            <div className={style.device_img}>
              <img src={rightArrow} alt="" />
            </div>
          </div>
          <div className={style.device_box} onClick={deleteWithPolar}>
            <span>Polar</span>
            <div className={style.device_img}>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
        <div className={style.btn_adding_device} onClick={syncWithPolar}>
          <div>Добавить устройство</div>
        </div>
      </div>
    </div>
  );
}

export default DevicePage;
