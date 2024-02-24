import { MouseEventHandler, memo } from 'react';
import points from '../../../assets/icons/png.png';
import exit from '../../../assets/SquareAltArrowLeft.png';
import no_photo from '../../../assets/no_avatar.png';
import style from '../css/UserPage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

function UserProfile({handleModal}:{handleModal:MouseEventHandler<HTMLDivElement>}) {
  const { id } = useParams();

  const users = useSelector((store: RootState) => store.auth.allUsers);

  const user = users.filter((el) => el.id === Number(id));

  const subscribers = useSelector(
    (store: RootState) => store.auth.subscription
  );
  const naviget = useNavigate();

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
                <div>{subscribers.length}</div>
                <span>подписок</span>
              </div>
              <div className={`${style.statistics}`}>
                <div>{subscribers.length}</div>
                <span>подписчиков</span>
              </div>
            </div>
          </div>
          <div className={style.btn_sub_container}>
            <span>Подписаться</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(UserProfile);
