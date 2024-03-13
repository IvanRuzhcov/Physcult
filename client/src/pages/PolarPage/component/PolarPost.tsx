import React from 'react';
import style from '../css/Polar.module.css'
import noPhoto from '../../../assets/no_avatar.png';
import { formatDate, formatDuration } from '../../../helpers/format'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import TrackMap from './TrackMap';


function PolarPost({data}:any) {
  const user = useSelector((store: RootState) => store.auth.user);

    return (
        <>
         <div className={style.polar_data_box} key={data['id']}>
                <div className={style.post_header}>
                  <img src={user?.avatar_img || noPhoto} alt="" />
                  <div className={style.post_name}>
                    <span>{`${user?.name} ${user?.surname}`}</span>
                    <div>{formatDate(data['upload-time'])}</div>
                  </div>
                </div>
                <div className={style.result_container}>
                  <div className={style.result_box}>
                    <span>Дистанция</span>
                    <div>{data['distance']}</div>
                  </div>
                  <div className={style.result_box}>
                    <span>Время </span>
                    <div>{formatDuration(data['duration'])}</div>
                  </div>
                  <div className={style.result_box}>
                    <span>Ккал</span>
                    <div>{data['calories']}</div>
                  </div>
                </div>
                <div className={style.map_container}>
                  {data.gpx && (
                    <TrackMap gpxData={data.gpx} mapId={`map-${data['id']}`} />
                  )}
                </div>
                <div>
                    
                </div>
              </div>
        </>
    );
}

export default PolarPost;