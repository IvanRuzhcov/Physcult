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
import NavBar from '../Navbar/NavBar';
import { useSelector } from 'react-redux';
import { Root } from 'react-dom/client';
import { RootState } from '../../store';

function NewsFeed() {
    const user = useSelector((store:RootState)=>store.auth.user)
    const subscription = useSelector((store:RootState)=>store.auth.subscription)
    console.log(subscription)
    const post = useSelector((store:RootState)=>store.auth.allPosts)

  

  return (
    <>
    <div className={style.container}>
      <History />
      <div className={style.posts_feed}>
        { post.map((el) => (
          <Post el={el} key={el.id} />
        ))}
      </div>
    </div>
    <NavBar />
    </>
  );
}

export default NewsFeed;
