import React, { useState } from 'react';
import style from './css/PersonalPage.module.css';
import malyshko from '../../assets/malyshko.png';
import photo_malishko from '../../assets/post_malichko.png';
import map from '../../assets/map_malishko.jpeg';

import Post from '../NewsFeed/components/Post';
import UserProfile from './components/UserProfile';
import UserNavbar from './components/UserNavbar';
import AwardsContainer from './components/AwardsContainer';
import PerformanceSection from './components/PerformanceSection';
import NavBar from '../Navbar/NavBar';

function PersonalPage() {
  const [activeBtn, setActiveBtn] = useState('progress');

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
  ];

  const handlePublications = () => {
    setActiveBtn('publications');
  };
  const handleProgress = () => {
    setActiveBtn('progress');
  };

  return (
    <>
    <div className={style.profile}>
      <div className={style.profile_feed}>
        <UserProfile />
        <UserNavbar
          activeBtn={activeBtn}
          handlePublications={handlePublications}
          handleProgress={handleProgress}
        />

        {activeBtn === 'publications' ? (
          <div className={style.posts_feed}>
            {posts.map((el) => (
              <Post el={el} />
            ))}
          </div>
        ) : (
          <div className={style.achievement_container}>
            <AwardsContainer />
            <PerformanceSection />
          </div>
        )}
      </div>
    </div>
      <NavBar />
    </>
  );
}

export default PersonalPage;
