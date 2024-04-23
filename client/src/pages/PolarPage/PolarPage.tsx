import style from './css/Polar.module.css';
import leftArrow from '../../assets/SquareAltArrowLeft.png';
import rightArrow from '../../assets/Settings.png';
import physcult from '../../assets/physcylt.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import PolarPost from './component/PolarPost';
import { useEffect } from 'react';
import { initPolar } from '../DevicePage/DeviceSlice';

function PolarPage() {
  const polarDev = useSelector((store: RootState) => store.device.polar);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initPolar());
  });

  return (
    <div className={style.polar_container}>
      <div className={style.container}>
        <div className={style.header_polar}>
          <div
            className={style.left_arrow}
            onClick={() => navigate('/settings/device')}
          >
            <img src={leftArrow} alt="" />
          </div>
          <div className={style.svg_physcult}>
            <img src={physcult} alt="" />
          </div>
          <div className={style.right_arrow}>
            <img src={rightArrow} alt="" />
          </div>
        </div>

        <div className={style.container_data}>
          {polarDev?.data ? (
            [...polarDev?.data]
              .reverse()
              .map((data: any) => (
                <PolarPost key={data['id']} data={data} index={data['id']} />
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
    </div>
  );
}

export default PolarPage;
