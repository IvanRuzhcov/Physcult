import style from './css/NewsFeed.module.css';
import History from './components/History';
import Post from './components/Post';
import NavBar from '../Navbar/NavBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function NewsFeed() {
  const subscription = useSelector(
    (store: RootState) => store.auth.subscription
  );
  const post = useSelector((store: RootState) => store.auth.allPosts);


  return (
    <>
      <div className={style.container}>
        <div className={style.container_news_feed}>
          <History />
          <div className={style.posts_feed}>
            {post.map((el) => {
              const isSubscribed = subscription.find(
                (sub) => sub.subscribe_id === el.user_id_post
              );
              if (isSubscribed) {
                return <Post el={el} key={el.id} />;
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
