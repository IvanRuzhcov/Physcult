import React, { memo } from 'react';
import style from '../css/NewsFeed.module.css';
import goldMedal from '../../../assets/goldMedal.png';
import silverMedal from '../../../assets/silverMedal.png';
import bronzeMedal from '../../../assets/bronzeMedal.png';
import { Posts } from '../../PersonalPage/types/Post';

function PostResults({ UserPostTrainingData }: Posts) {
  
  const data = UserPostTrainingData[0].TrainingDatum;
  
console.log(data)

  return (
    <div className={style.post_result}>
      <div className={style.results}>
        <span>Расстояние</span>
        <div>{`${data.distance} км`} </div>
      </div>
      <div className={style.results}>
        <span>Темп</span>
        <div>{`${data.pace} /км`} </div>
      </div>
      <div className={style.results}>
        <span>Время</span>
        <div>{`${data.time}`} </div>
      </div>
      {/* <div className={style.post_medals}>
        <span>Достижения</span>
        <div className={style.post_achievements}>
          <div>
            <img src={goldMedal} alt="" />
            <img src={silverMedal} alt="" />
            <img src={bronzeMedal} alt="" />
          </div>
          <div className={style.quantity_medals}>
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default memo(PostResults);
