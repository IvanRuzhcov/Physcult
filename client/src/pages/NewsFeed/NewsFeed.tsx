import React from 'react';
import style from './css/NewsFeed.module.css';
import History from './components/History';
import malyshko from '../../assets/malyshko.png';
import lekarev from '../../assets/lekarev.png';
import photo_malishko from '../../assets/post_malichko.png';
import map from '../../assets/map_malishko.jpeg';
import lecarev_map from '../../assets/mapLecarev.jpeg';
import lecarevPhoto from '../../assets/lecarev.jpeg';
import Post from './components/Post';

function NewsFeed() {
    
  const posts = [
    {
      id: 1,
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
      id: 2,
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
      description: 'Готовы увидеть звезд российского биатлона и лыж в деле?...',
      like: 11.8,
      comments: 2.8,
      photo_post: [lecarevPhoto, lecarev_map],
    },
    
  ];

  return (
    <div className={style.container}>
      <History />
      <div className={style.posts_feed}>
        {posts.map((el) => (
          <Post el={el}  />
        ))}
      </div>
    </div>
  );
}

export default NewsFeed;
