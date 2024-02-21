import { memo } from 'react';
import CalendarMinimalistic from '../../../assets/CalendarMinimalistic.png';
import NotificationAlert from '../../../assets/NotificationAlert.png';
import no_photo from '../../../assets/no_avatar.png';
import Settings from '../../../assets/Settings.png';
import style from '../css/PersonalPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

function UserProfile() {
  const user = useSelector((store: RootState) => store.auth.user);
  const subscribers = useSelector(
    (store: RootState) => store.auth.subscription
  );

  const naviget = useNavigate();

  const hendleRedirectToSettings = () => {
    naviget('/settings');
  };
  return (
    <>
      <div className={style.personal_info}>
        <div className={style.header_personal_info}>
          <div className={style.profile_span}>
            <span>Профиль</span>
          </div>
          <div
            className={style.profile_iсons}
            onClick={() => hendleRedirectToSettings()}
          >
            <img src={Settings} alt="" />
          </div>
          <div className={style.profile_iсons}>
            <img src={NotificationAlert} alt="" />
          </div>
          <div className={style.profile_iсons}>
            <img src={CalendarMinimalistic} alt="" />
          </div>
        </div>
        <div className={style.profile_photo}>
          <div className={style.user_photo}>
            <img src={user?.avatar_img ? user.avatar_img : no_photo} alt="" />
          </div>
          <div className={style.user_name}>
            <span>{user?.name}</span>
          </div>
          <div className={style.user_nick}>
            <span>@{user?.nick}</span>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.community_box}>
            <div className={style.community}>
              <div className={`${style.statistics}`}>
                <div>{subscribers.length}</div>
                <span>подписок</span>
              </div>
              <div className={`${style.statistics}`}>
                <div>{subscribers.length}</div>
                <span>подписчиков</span>
              </div>
            </div>
          </div>
          <div className={style.results_container}>
            <div className={style.result}>
              <div>138</div>
              <span>дистанция</span>
            </div>
            <div className={style.result}>
              <div>6:05</div>
              <span>время</span>
            </div>
            <div className={style.result}>
              <div>1024</div>
              <span>ккал</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(UserProfile);
