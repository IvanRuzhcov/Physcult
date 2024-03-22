import style from './css/Polar.module.css';
import leftArrow from '../../assets/SquareAltArrowLeft.png';
import rightArrow from '../../assets/Settings.png';
import physcult from '../../assets/physcylt.png'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import PolarPost from './component/PolarPost';


function PolarPage() {
  const polarDev = useSelector((store: RootState) => store.device.polar);
  const navigate = useNavigate();
  
console.log(polarDev)

  // useEffect(() => {
  //   const withPolar = async () => {
  //     try {
  //       // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //       const response = await fetch('/polar/auth', {
  //         method: 'POST',
  //       });
  //     } catch (error) {
  //       console.error('Ошибка при синхронизации с Polar:', error);
  //     }
  //   };

  //   withPolar();
  // }, []);

  return (
    <div className={style.polar_container}>
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
            <PolarPost key={data['id']} data={data} index={data['id']} />
          ))
        ) : (
          <span className={style.polar_text}>
            Тут будeт отображаться все ваши данные с момента синхронизации с
            Polar
          </span>
        )}
        <div className={style.polar_data}>
        </div>
      </div>
    </div>
  );
}

export default PolarPage;
