import style from './css/Polar.module.css';
import leftArrow from '../../assets/SquareAltArrowLeft.png';
import rightArrow from '../../assets/Settings.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import Svg from '../Onboarding/RegistrationPage/component/Svg';
import PolarPost from './component/PolarPost';
import { useEffect } from 'react';

function PolarPage() {
  const polarDev = useSelector((store: RootState) => store.device.polar);

  const navigate = useNavigate();
  
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

  return (
    <div className={style.polar_container}>
      <div className={style.header_polar}>
        <div
          className={style.left_arrow}
          onClick={() => navigate('/settings/device')}
        >
          <img src={leftArrow} alt="" />
        </div>
        <Svg />
        <div
          className={style.right_arrow}
          onClick={() => navigate('/settings/device')}
        >
          <img src={rightArrow} alt="" />
        </div>
      </div>

      <div className={style.container}>
        {polarDev?.data ? (
          [...polarDev?.data].reverse().map((data: any) => (
            <PolarPost key={data['id']} data={data} />
          ))
        ) : (
          <span className={style.polar_text}>
            Тут будeт отображаться все ваши данные с момента синхронизации с
            Polar
          </span>
        )}
        <div className={style.polar_data}></div>
      </div>
    </div>
  );
}

export default PolarPage;
