import style from './css/NewsFeed.module.css';
import History from './components/History';
import Post from './components/Post';
import NavBar from '../Navbar/NavBar';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { useEffect } from 'react';
import {
  initPost,
  initSubscribers,
  initSubscription,
} from '../PersonalPage/userAuthSlice';

function NewsFeed() {
  const subscription = useSelector(
    (store: RootState) => store.auth.subscription
  );
  console.log(subscription);
  const user = useSelector((store: RootState) => store.auth.user);
  const post = useSelector((store: RootState) => store.auth.allPosts);
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initSubscription(Number(user?.id)));
    dispatch(initSubscribers(Number(user?.id)));
    dispatch(initPost());
  }, [dispatch, user?.id]);

  return (
    <>
      <div className={style.container}>
        <div className={style.container_news_feed}>
          <History />
          <div className={style.posts_feed}>
            {post.map((el) => {
              // Проверяем, что subscription является массивом
              if (Array.isArray(subscription)) {
                const isSubscribed = subscription.find(
                  (sub) => sub.subscribe_id === el.user_id_post
                );
                if (isSubscribed) {
                  return <Post el={el} key={el.id} />;
                }
              }
              return null;
            })}
          </div>
        </div>
      </div>
      <NavBar />
    </>
  );
}

export default NewsFeed;
