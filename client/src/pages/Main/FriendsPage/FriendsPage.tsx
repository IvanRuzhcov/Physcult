import styles from './css/FriendsPage.module.css';
import NavBar from '../../Navbar/NavBar';
import MainNavbar from '../MainPage/component/MainNavbar';
import no_photo from '../../../assets/no_avatar.png';
import { Plus } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import {
  initSubscribers,
  initSubscription,
  subscribe,
  unsubscribe,
} from '../../UserPage/UserPageSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FriendsPage(): JSX.Element {
  const navigate = useNavigate();
  const users = useSelector((store: RootState) => store.auth.allUsers);
  const user = useSelector((store: RootState) => store.auth.user);
  const subscriber = useSelector((store: RootState) => store.auth.user?.id);
  const dispatch = useAppDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    if (user?.id) {
      dispatch(initSubscription(Number(user.id)));
      dispatch(initSubscribers(Number(user.id)));
    }
  }, [dispatch, user?.id]);

  useEffect(() => {
    setFilteredUsers(
      users.filter((el) => 
        (el.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
        el.nick?.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    );
  }, [searchQuery, users]);

  const subscription = useSelector(
    (store: RootState) => store.userData.subscription
  ); // подписчики этого юзера

  console.log(users);

  const isSubscribed = (customerId: number | undefined) =>
    Array.isArray(subscription) &&
    subscription.some((el) => el.subscribe_id === customerId);
  // проверка на то что подписан или нет

  const handleUnsubscribe = async (id: number | undefined) => {
    if (id !== undefined) {
      await dispatch(unsubscribe({ user_id: subscriber!, subscribe_id: id }));
      // Refresh subscription list
      await dispatch(initSubscription(Number(user?.id)));
    }
  };
  // отписка

  const handleSubscribe = async (id: number | undefined) => {
    if (id !== undefined) {
      await dispatch(subscribe({ user_id: subscriber!, subscribe_id: id }));
      // Refresh subscription list
      await dispatch(initSubscription(Number(user?.id)));
    }
  };
  // подписка

  const hendlePost = (id: number | undefined) => {
    if (id !== user?.id) {
      navigate(`/profile/${id}`);
    }
  };

  return (
    <main className={styles.conteiner}>
      <div className={styles.head}>
        <span className={styles.headline}>Друзья</span>
      </div>

      <MainNavbar />

      <div className={styles.input_conteiner}>
        <div className={styles.group}>
          <svg className={styles.icon} aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input
            placeholder="Поиск"
            type="search"
            className={styles.f_input}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.friend_conteiner}>
        <div className={styles.friend}>
          <div className={styles.svg_add}>
            <Plus size={30} color="#ff0606" />
          </div>
          <div className={styles.add_friend}>
            <p className={styles.name}>Пригласить друзей</p>
          </div>

          <button className={styles.btn_subscription}>Пригласить</button>
        </div>
        {filteredUsers
          .filter((el) => el.id !== user!.id)
          .map((customer) => {
            return (
              <div className={styles.friend} key={customer.id}>
                <div
                  className={styles.photo}
                  onClick={() => hendlePost(customer.id)}
                >
                  <img src={customer.avatar_img || no_photo} alt="" />
                </div>
                <div className={styles.name_friend}>
                  <p className={styles.name}>{customer.name}</p>
                  <p className={styles.nik_name}>@{customer.nick}</p>
                </div>

                {isSubscribed(customer.id) ? (
                  <div
                    className={styles.btn_subscription}
                    onClick={() => handleUnsubscribe(customer.id)}
                  >
                    <span>Отписаться</span>
                  </div>
                ) : (
                  <div
                    className={styles.btn_subscription_container}
                    onClick={() => handleSubscribe(customer.id)}
                  >
                    <span>Подписаться</span>
                  </div>
                )}
              </div>
            );
          })}
      </div>
      <div className={styles.footer}></div>
      <NavBar />
    </main>
  );
}
