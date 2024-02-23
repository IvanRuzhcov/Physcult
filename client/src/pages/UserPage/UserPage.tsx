import React, { useState } from 'react';
import style from './css/UserPage.module.css'
import UserProfile from '../PersonalPage/components/UserProfile';
import UserNavbar from '../PersonalPage/components/UserNavbar';
import Post from '../NewsFeed/components/Post';
import AwardsContainer from '../PersonalPage/components/AwardsContainer';
import PerformanceSection from '../PersonalPage/components/PerformanceSection';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import NavBar from '../Navbar/NavBar';


function UserPage() {
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

export default UserPage;