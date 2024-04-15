import { useEffect, useState } from 'react';
import style from './css/PersonalPage.module.css';

import Post from '../NewsFeed/components/Post';
import UserNavbar from './components/UserNavbar';
import AwardsContainer from './components/AwardsContainer';
import PerformanceSection from './components/PerformanceSection';
import NavBar from '../Navbar/NavBar';
import { RootState, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import OwnProfile from './components/OwnProfile';
import { initSubscribers, initSubscription } from './userAuthSlice';

function PersonalPage() {
  const [activeBtn, setActiveBtn] = useState('publications');
  const post = useSelector((store: RootState) => store.auth.post);
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();

  const handlePublications = () => {
    setActiveBtn('publications');
  };
  const handleProgress = () => {
    setActiveBtn('progress');
  };

  useEffect(() => {
    dispatch(initSubscription(Number(user?.id)));
    dispatch(initSubscribers(Number(user?.id)));
  }, [dispatch, user?.id]);
  return (
    <>
      <div className={style.profile}>
        <div className={style.profile_feed}>
          <OwnProfile />
          <UserNavbar
            activeBtn={activeBtn}
            handlePublications={handlePublications}
            handleProgress={handleProgress}
          />

          {activeBtn === 'publications' ? (
            <div className={style.posts_feed}>
              {post && post.map((el) => <Post key={el.id} el={el} />)}
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
