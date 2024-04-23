import React, {  useState } from 'react';
import style from './css/UserPage.module.css';
import Post from '../NewsFeed/components/Post';
import AwardsContainer from '../PersonalPage/components/AwardsContainer';
import PerformanceSection from '../PersonalPage/components/PerformanceSection';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import UserProfile from './components/UserProfile';
import {useParams } from 'react-router-dom';
import UserProfileNavbar from './components/UserProfileNavbar';

function UserPage() {
  const [activeBtn, setActiveBtn] = useState('publications');
  const { id } = useParams();

  const posts = useSelector((store: RootState) => store.auth.allPosts);

  const post = posts.filter((el) => el.user_id_post === Number(id));
 
  const [modal, setModal] = useState(false);


  const handleModal = () => {
    setModal(!modal);
  };

  const handlePublications = () => {
    setActiveBtn('publications');
  };
  const handleProgress = () => {
    setActiveBtn('progress');
  };
  const handleRepost = () => {
    setActiveBtn('repost');
  };

  return (
    <>
      <div className={style.profile}>
      <div className={style.adaptive_container}>

        <div className={style.profile_feed}>
          <UserProfile 
          handleModal={handleModal}
          />
          <UserProfileNavbar
            activeBtn={activeBtn}
            handlePublications={handlePublications}
            handleProgress={handleProgress}
            handleRepost={handleRepost}
          />

          {activeBtn === 'publications' ? (
            <div className={style.posts_feed}>
              {post && post.map((el) => <Post key={el.id} el={el} />)}
            </div>
          ) : activeBtn === 'progress' ? (
            <div className={style.achievement_container}>
              <AwardsContainer />
              <PerformanceSection />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={modal ? style.modal_activ : style.modal}>
        <div className={style.modal_backgraund} onClick={handleModal}></div>
        <div className={style.modal_body}>
          <div className={style.contact_methods}>
          
            <div className={style.contact_method}>
              {/* <img src={repost} alt="" /> */}
              <span>Поделиться</span>
            </div>
            <div className={style.to_block}>
              {/* <img src={to_block} alt="" /> */}
              <span>Заборкировать</span>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default UserPage;
