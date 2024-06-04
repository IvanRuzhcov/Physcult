import styles from './css/FriendsPage.module.css';
import NavBar from '../../Navbar/NavBar';
import MainNavbar from '../MainPage/component/MainNavbar';
import { Plus } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import {
  initSubscribers,
  initSubscription,
  subscribe,
  unsubscribe,
} from '../../UserPage/UserPageSlice';
import { useEffect } from 'react';

export default function FriendsPage(): JSX.Element {
  const users = useSelector((store: RootState) => store.auth.allUsers);
  const user = useSelector((store: RootState) => store.auth.user);
  const subscriber = useSelector((store: RootState) => store.auth.user?.id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initSubscription(Number(user?.id)));
    dispatch(initSubscribers(Number(user?.id)));
  }, [dispatch]);

  const subscribers = useSelector(
    (store: RootState) => store.userData.subscribers
  ); // подписчики этого юзера

  console.log(subscribers);

  const isSubscribed = (customerId: number | undefined) =>
    Array.isArray(subscribers) &&
    subscribers.some((el) => el?.user_id === customerId);

  const handleUnsubscribe = (id: number | undefined) => {
    const action = dispatch(
      unsubscribe({ user_id: subscriber!, subscribe_id: Number(id) })
    );
    return action;
  };

  const handleSubscribe = (id: number | undefined) => {
    const action = dispatch(
      subscribe({ user_id: subscriber!, subscribe_id: Number(id) })
    );
    return action;
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
          <input placeholder="Поиск" type="search" className={styles.f_input} />
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

        {users
          .filter((el) => el.id !== user!.id)
          .map((customer) => {
            return (
              <div className={styles.friend} key={customer.id}>
                <div className={styles.photo}>
                  <img src={customer.avatar_img} alt="" />
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
