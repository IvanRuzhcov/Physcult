import {  useState } from 'react';
import style from './css/PersonalPage.module.css';

import Post from '../NewsFeed/components/Post';
import UserProfile from './components/UserProfile';
import UserNavbar from './components/UserNavbar';
import AwardsContainer from './components/AwardsContainer';
import PerformanceSection from './components/PerformanceSection';
import NavBar from '../Navbar/NavBar';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

function PersonalPage() {
  const [activeBtn, setActiveBtn] = useState('publications');
  const post = useSelector((store:RootState)=> store.auth.post)
 

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
              {post && post.map((el) => (
                <Post key={el.id} el={el} />
                
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
