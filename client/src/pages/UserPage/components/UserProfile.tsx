import { MouseEventHandler, memo, useEffect, useState } from 'react';
import points from '../../../assets/icons/png.png';
import exit from '../../../assets/SquareAltArrowLeft.png';
import no_photo from '../../../assets/no_avatar.png';
import style from '../css/UserPage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import {
  initSubscribers,
  initSubscription,
  subscribe,
  unsubscribe,
} from '../UserPageSlice';
import { initPost } from '../../PersonalPage/userAuthSlice';

function UserProfile({
  handleModal,
}: {
  handleModal: MouseEventHandler<HTMLDivElement>;
}) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const subscriber = useSelector((store: RootState) => store.auth.user?.id);
  useEffect(() => {
    setLoading(true);
    Promise.all([
      dispatch(initSubscription(Number(id))),
      dispatch(initSubscribers(Number(id))),
    ])
      .then(() => setLoading(false))
      .catch((error) => console.error('Error fetching subscription:', error));
  }, [dispatch, id]);


  useEffect(() => {
    dispatch(initPost());
  }, [dispatch]);

  const users = useSelector((store: RootState) => store.auth.allUsers); // Все юзеры

  const subscription = useSelector(
    (store: RootState) => store.userData.subscription
  ); // пописки этого юзера
  const subscribers = useSelector(
    (store: RootState) => store.userData.subscribers
  ); // подписчики этого юзера

  const isSubscribed = subscribers.some((el) => el?.user_id === subscriber);

  const user = users.filter((el) => el.id === Number(id));

  const naviget = useNavigate();

  const handleUnsubscribe = () => {
    const action = dispatch(
      unsubscribe({ user_id: subscriber!, subscribe_id: Number(id) })
    );
    return action;
  };

  const handleSubscribe = () => {
    const action = dispatch(
      subscribe({ user_id: subscriber!, subscribe_id: Number(id) })
    );
    return action;
  };

  return (
    <>
      <div className={style.personal_info}>
        <div className={style.header_personal_info}>
          <div className={style.profile_exit} onClick={() => naviget(-1)}>
            <img src={exit} alt="" />
          </div>

          <div className={style.profile_span}>
            <span>Профиль</span>
          </div>
          <div className={style.profile_iсons} onClick={handleModal}>
            <img src={points} alt="" />
          </div>
        </div>
        <div className={style.profile_photo}>
          <div className={style.user_photo}>
            <img src={user[0]?.avatar_img || no_photo} alt="" />
          </div>
          <div className={style.user_name}>
            <span>
              {user[0]?.name
                ? `${user[0]?.name} ${user[0]?.surname}`
                : 'Твое имя'}
            </span>
          </div>
          <div className={style.user_nick}>
            <span>@{user[0]?.nick}</span>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.community_box}>
            <div className={style.community}>
              <div className={`${style.statistics}`}>
                <div>{subscription.length}</div>
                <span>подписок</span>
              </div>
              <div className={`${style.statistics}`}>
                <div>{subscribers.length}</div>
                <span>подписчиков</span>
              </div>
            </div>
          </div>
          {isSubscribed ? (
            <div
              className={style.btn_subscribers_container}
              onClick={handleUnsubscribe}
            >
              <span>Отписаться</span>
            </div>
          ) : (
            <div
              className={style.btn_subscription_container}
              onClick={handleSubscribe}
            >
              <span>Подписаться</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default memo(UserProfile);
