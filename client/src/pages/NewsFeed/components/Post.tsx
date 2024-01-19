import React from 'react';
import style from '../css/NewsFeed.module.css';
import goldMedal from '../../../assets/goldMedal.png';
import silverMedal from '../../../assets/silverMedal.png';
import bronzeMedal from '../../../assets/bronzeMedal.png';
import like from '../../../assets/like.png';
import back from '../../../assets/back.png';
import coments from '../../../assets/comments.png';
import { Posts } from '../types/Posts';

function Post({ el }:{el:Posts}) {
  return (
    <>
      <div className={style.posts}>
        <div className={style.post_header}>
          <img src={el.photo} alt="" />
          <div className={style.post_name}>
            <span>{el.name}</span>
            <div>{`${el.date}•${el.time_post} `} </div>
          </div>
        </div>
        <div className={style.post_result}>
          <div className={style.results}>
            <span>Расстояние</span>
            <div>{`${el.distance} км`} </div>
          </div>
          <div className={style.line}></div>
          <div className={style.results}>
            <span>Темп</span>
            <div>{`${el.pace} /км`} </div>
          </div>
          <div className={style.line}></div>
          <div className={style.results}>
            <span>Время</span>
            <div>{`${el.time}`} </div>
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
                {el.medals_bronze + el.medals_gold + el.medals_silver}
              </div>
            </div>
          </div>
        </div>
        <div className={style.post_photos}>
          {el.photo_post.map((el:any) => {
            return (
              <div className={style.post_photo}>
                <img src={el} alt="" />
              </div>
            );
          })}
        </div>
        <div className={style.post_description}>
          <span>{el.description}</span>
        </div>
        <div className={style.post_feedback}>
          <div className={style.post_feedback_box}>
            <div>
              <img src={like} alt="" />
            </div>
            <span>{`${el.like} тыс`}</span>
          </div>
          <div className={style.post_feedback_box}>
            <div>
              <img src={coments} alt="" />
            </div>
            <span>{`${el.comments} тыс`}</span>
          </div>
          <div className={style.post_feedback_box}>
            <img src={back} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
