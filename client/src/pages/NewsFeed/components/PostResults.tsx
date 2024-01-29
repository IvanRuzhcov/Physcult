import React, { memo } from 'react';
import style from '../css/NewsFeed.module.css';
import goldMedal from '../../../assets/goldMedal.png';
import silverMedal from '../../../assets/silverMedal.png';
import bronzeMedal from '../../../assets/bronzeMedal.png';
import { Posts } from '../types/Posts';

function PostResults({
  distance,
  pace,
  time,
  medals_bronze,
  medals_gold,
  medals_silver,
}: Posts) {
  return (
    <div className={style.post_result}>
      <div className={style.results}>
        <span>Расстояние</span>
        <div>{`${distance} км`} </div>
      </div>
      <div className={style.line}></div>
      <div className={style.results}>
        <span>Темп</span>
        <div>{`${pace} /км`} </div>
      </div>
      <div className={style.line}></div>
      <div className={style.results}>
        <span>Время</span>
        <div>{`${time}`} </div>
      </div>
      <div className={style.post_medals}>
        <span>Достижения</span>
        <div className={style.post_achievements}>
          <div>
            <img src={goldMedal} alt="" />
            <img src={silverMedal} alt="" />
            <img src={bronzeMedal} alt="" />
          </div>
          <div className={style.quantity_medals}>
            {medals_bronze + medals_gold + medals_silver}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(PostResults);
