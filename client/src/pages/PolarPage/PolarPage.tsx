import React from 'react';
import style from './css/Polar.module.css';
import leftArrow from '../../assets/SquareAltArrowLeft.png';
import rightArrow from '../../assets/Settings.png';
import noPhoto from '../../assets/no_avatar.png';
import { useNavigate } from 'react-router-dom';
import polar from '../../assets/ devices/polar.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function formatDate(uploadTime: string) {
  const date = new Date(uploadTime);

  const formattedDate = date
    .toISOString()
    .replace(
      /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):\d{2}.\d{3}Z/,
      '$3.$2.$1 • $4:$5'
    );

  return formattedDate;
}

function formatDuration(duration: string) {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+(\.\d+)?S)?/);
  if (!match) {
    return 'Invalid duration format';
  }

  const hours = match[1] ? parseInt(match[1], 10) : 0;
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  const seconds = match[3] ? parseFloat(match[3]) : 0;

  let result = '';

  if (hours > 0) {
    result += `${hours} ч `;
  }

  if (minutes > 0 || hours === 0) {
    result += `${minutes} мин`;
  }
  if (hours === 0 || minutes === 0 || minutes > 0) {
    const roundedSeconds = Math.round(seconds);
    result += ` ${roundedSeconds} с`;
  }

  return result;
}

function PolarPage() {
    
  const polarDev = useSelector((store: RootState) => store.device.polar);
  const user = useSelector((store: RootState) => store.auth.user);

  const navigate = useNavigate();

  return (
    <div className={style.polar_container}>
      <div className={style.header_polar}>
        <div
          className={style.left_arrow}
          onClick={() => navigate('/settings/device')}
        >
          <img src={leftArrow} alt="" />
        </div>
        <img className={style.polar_img} src={polar} alt="" />
        <div
          className={style.right_arrow}
          onClick={() => navigate('/settings/device')}
        >
          <img src={rightArrow} alt="" />
        </div>
      </div>
      <div className={style.container}>
        {polarDev?.data ? (
          polarDev?.data.map((data:any) => {
            return (
                <div className={style.polar_data_box} key={data["id"]}>
                  <div className={style.post_header}>
                    <img src={user?.avatar_img || noPhoto} alt="" />
                    <div className={style.post_name}>
                      <span>{`${user?.name} ${user?.surname}`}</span>
                      <div>{formatDate(data['upload-time'])}</div>
                    </div>
                  </div>
                  <div className={style.result_container}>
                    <div className={style.result_box}>
                      <div>{data['distance']}</div>
                      <span>Дистанция</span>
                    </div>
                    <div className={style.result_box}>
                      <div>{formatDuration(data["duration"])}</div>
                      <span>Время </span>
                    </div>
                    <div className={style.result_box}>
                      <div>{data["calories"]}</div>
                      <span>Ккал</span>
                    </div>
                  </div>
                </div>
            );
          })
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

// [
// {
// "upload-time":"2024-03-06T13:26:17.000Z",
// "id":344777249,
// "polar-user":"https://www.polaraccesslink.com/v3/users/22328299",
// "transaction-id":288218063,
// "device":"Polar Vantage M",
// "device-id":"4B91C421",
// "start-time":"2024-03-06T15:47:07",
// "start-time-utc-offset":180,
// "duration":"PT21M54.002S",
// "calories":118,
// "distance":2174,
// "heart-rate":{"average":74,"maximum":115},
// "training-load":8,
// "sport":"OTHER",
// "has-route":false,
// "detailed-sport-info":"WALKING",
// "training-load-pro":{
//   "cardio-load":2.50071,
//   "cardio-load-interpretation":"VERY_LOW",
//   "muscle-load":-1,
//   "muscle-load-interpretation":"NOT_AVAILABLE",
//   "perceived-load":0,
//   "perceived-load-interpretation":"NOT_AVAILABLE",
//   "user-rpe":"UNKNOWN"}}]
