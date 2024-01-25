import React from 'react';
import CalendarMinimalistic from '../../../assets/CalendarMinimalistic.png';
import NotificationAlert from '../../../assets/NotificationAlert.png';
import Settings from '../../../assets/Settings.png';
import malyshko from '../../../assets/malyshko.png';
import photo_malishko from '../../../assets/post_malichko.png';
import map from '../../../assets/map_malishko.jpeg';
import style from '../css/PersonalPage.module.css';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
  const naviget = useNavigate()
  const mal = {
    id: 1,
    name: 'Дмитрий Малышко',
    photo: malyshko,
    nick: '@malyshko',
    distance: '19,69',
    pace: '5:19',
    time: '1ч. 44мин.',
    medals_gold: 2,
    medals_silver: 2,
    medals_bronze: 1,
    date: '14.10.2023',
    time_post: '12:32',
    description:
      'Сегодня впервые вместе с семьей на лыжах, даже малыш открыл для себя этот веселый вид активности!',
    like: 9.8,
    comments: 9.8,
    photo_post: [photo_malishko, map],
    subscriptions: 8,
    subscribers: 8,
  };

   const hendleRedirectToSettings = () =>{
      naviget('/settings')
   }
  return (
    <>
      <div className={style.personal_info}>
        <div className={style.header_personal_info}>
          <div className={style.profile_span}>
            <span>Профиль</span>
          </div>
          <div className={style.profile_iсons} onClick={()=> hendleRedirectToSettings()} >
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
            <img src={mal.photo} alt="" />
          </div>
          <div className={style.user_name}>
            <span>{mal.name}</span>
          </div>
          <div className={style.user_nick}>
            <span>{mal.nick}</span>
          </div>
        </div>
        <div className={style.community_box}>
          <div className={style.community}>
            <div className={`${style.statistics}`}>
              <div>{mal.subscriptions}</div>
              <span>подписок</span>
            </div>
            <div className={`${style.statistics}`}>
              <div>{mal.subscribers}</div>
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
    </>
  );
}

export default UserProfile;
