import React from 'react';
import style from './css/NewsFeed.module.css';
import malyshko from '../../assets/malyshko.png';
import lekarev from '../../assets/lekarev.png';
import tsekulin from '../../assets/tsekulin.png';
import blanin from '../../assets/blanin.png';
import photo_malishko from '../../assets/post_malichko.png';
import map from '../../assets/map_malishko.jpeg';
import goldMedal from '../../assets/goldMedal.png';
import silverMedal from '../../assets/silverMedal.png';
import bronzeMedal from '../../assets/bronzeMedal.png';
import like from '../../assets/like.png';
import back from '../../assets/back.png';
import coments from '../../assets/comments.png';
import lecarev_map from '../../assets/mapLecarev.jpeg';
import lecarevPhoto from '../../assets/lecarev.jpeg';


function NewsFeed() {
  const historyUser = {
    photo: malyshko,
    name: 'malyshko',
    history:
      'https://static.news.ru/photo/37bf9717-fa52-4209-b747-b7214ba533a8_1024.jpg',
  };

  const history = [
    {
      photo: lekarev,
      name: 'lekarev',
      history:
        'https://static.news.ru/photo/37bf9717-fa52-4209-b747-b7214ba533a8_1024.jpg',
    },
    {
      photo: tsekulin,
      name: 'tsekulin',
      history:
        'https://static.news.ru/photo/37bf9717-fa52-4209-b747-b7214ba533a8_1024.jpg',
    },
    {
      photo: blanin,
      name: 'blanin',
      history:
        'https://static.news.ru/photo/37bf9717-fa52-4209-b747-b7214ba533a8_1024.jpg',
    },
    {
      photo: blanin,
      name: 'blanin',
      history:
        'https://static.news.ru/photo/37bf9717-fa52-4209-b747-b7214ba533a8_1024.jpg',
    },
    {
      photo: blanin,
      name: 'blanin',
      history:
        'https://static.news.ru/photo/37bf9717-fa52-4209-b747-b7214ba533a8_1024.jpg',
    },
    {
      photo: blanin,
      name: 'blanin',
      history:
        'https://static.news.ru/photo/37bf9717-fa52-4209-b747-b7214ba533a8_1024.jpg',
    },
    {
      photo: blanin,
      name: 'blanin',
      history:
        'https://static.news.ru/photo/37bf9717-fa52-4209-b747-b7214ba533a8_1024.jpg',
    },
  ];
  const posts = [
    {
      name: 'Дмитрий Малышко',
      photo: malyshko,
      distance: '19,69',
      pace: '5:19',
      time: '1ч. 44мин.',
      medals_gold: 2,
      medals_silver: 2,
      medals_bronze: 1,
      date: '14.10.2023',
      time_post: '12:32',
      description:
        'Сегодня впервые вместе с семьей на лыжах, даже малыш открыл для себя этот веселый вид активности!',
      like: 9.8,
      comments: 9.8,
      photo_post: [photo_malishko, map],
    },
    {
      name: 'Алексей Лекарев',
      photo: lekarev,
      distance: '7,10',
      pace: '4:54',
      time: '1ч.',
      medals_gold: 1,
      medals_silver: 1,
      medals_bronze: 1,
      date: '14.10.2023',
      time_post: '12:32',
      description:
        'Готовы увидеть звезд российского биатлона и лыж в деле?...',
      like: 11.8,
      comments: 2.8,
      photo_post: [lecarevPhoto, lecarev_map],
    },
    {
      name: 'Дмитрий Малышко',
      photo: malyshko,
      distance: '19,69',
      pace: '5:19',
      time: '1ч. 44мин.',
      medals_gold: 2,
      medals_silver: 2,
      medals_bronze: 1,
      date: '14.10.2023',
      time_post: '12:32',
      description:
        'Сегодня впервые вместе с семьей на лыжах, даже малыш открыл для себя этот веселый вид активности!',
      like: 9.8,
      comments: 9.8,
      photo_post: [photo_malishko, map],
    },
  ];

  return (
    <div>
      <div className={style.history_feed}>
        <div className={style.history}>
          <img src={historyUser.photo} alt="" />
          <div className={style.history_name}>
            <span>{historyUser.name}</span>
          </div>
        </div>
        {history.map((el) => {
          return (
            <div className={style.history}>
              <img src={el.photo} alt="" />
              <div className={style.history_name}>
                <span>{el.name}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.posts_feed}>
        {posts.map((el) => {
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
                  {el.photo_post.map((el) => {
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
        })}
      </div>
    </div>
  );
}

export default NewsFeed;
