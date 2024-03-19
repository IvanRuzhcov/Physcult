import React, { memo } from 'react';
import style from '../css/NewsFeed.module.css';
import { Posts } from '../../PersonalPage/types/Post';
import TrackMap from '../../PolarPage/component/TrackMap';

const PostPhotos = ({ photo_post, UserPostTrainingData }: Posts) => {
  const data = UserPostTrainingData[0].TrainingDatum;
  console.log()

  return (
    <div className={style.post_photos}>
    {photo_post.map((photo, index) => (
      <div key={index} className={style.post_photo}>
        <img src={photo} alt="" />
      </div>
    ))}
    {data.gpx && (
      <div className={style.map_box}>
        <TrackMap gpxData={data.gpx} mapId={`map-1${data['id']}`} />
      </div>
    )}
  </div>
  );
};

export default memo(PostPhotos);
