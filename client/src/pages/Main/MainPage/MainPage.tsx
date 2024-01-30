import React, { useState } from 'react'
import styles from './css/MainPage.module.css';
import star from '../../../assets/icons/Star.png';
import alert from '../../../assets/icons/NotificationAlert.png';
import market from '../../../assets/PhyscultMARKET.png';
import latypov from '../../../assets/latypov.png';
import frame1 from '../../../assets/Frame1.png';
import istomin from '../../../assets/istomin.png';
import kulikova from '../../../assets/kulikova.png';
import sorin from '../../../assets/sorin.png';
import orlova from '../../../assets/orlova.png';
import stepanova from '../../../assets/stepanova.png';
import sokolov from '../../../assets/sokolov.png';


export default function MainPage():JSX.Element {
  const [activeBtn, setActiveBtn] = useState('main');

  const handleMain = () => {
    setActiveBtn('main');
  };
  const handleTests = () => {
    setActiveBtn('test');
  };
  const handleFriends = () => {
    setActiveBtn('friend');
  };

  return (
    <main className={styles.container}>

      <div className={styles.header_personal_info}>
            <div className={styles.profile_span}>
              <span>Главная</span>
            </div>
            <div className={styles.profile_iсons}>
              <img src={alert} alt="" />
            </div>
            <div className={styles.profile_iсons}>
              <img src={star} alt="" />
            </div>
          </div>


          <div className={styles.user_navbar}>
          <div className={styles.publications_box} onClick={handleMain}>
            <div
              className={
                activeBtn === 'main'
                  ? styles.on_publications
                  : styles.off_publications
              }
            >
              Главная
            </div>
            <div
              className={
                activeBtn === 'main' ? styles.active_line : styles.line
              }
            ></div>
          </div>
          <div className={styles.progress_box} onClick={handleTests}>
            <div
              className={
                activeBtn === 'test'
                  ? styles.on_progress
                  : styles.off_progress
              }
            >
              Испытания
            </div>
            <div
              className={
                activeBtn === 'test' ? styles.active_line : styles.line
              }
            ></div>
          </div>
          <div className={styles.friend_box} onClick={handleFriends}>
            <div
              className={
                activeBtn === 'friend'
                  ? styles.on_friend
                  : styles.off_friend
              }
            >
              Друзья
            </div>
            <div
              className={
                activeBtn === 'friend' ? styles.active_line : styles.line
              }
            ></div>
          </div>
        </div>

        <div className={styles.physcult_market}>
          <div className={styles.img_market}>
            <img src={market} alt="" />
          </div>
        </div>

        <div className={styles.compilations}>
          <div className={styles.inside}>
            <div>
              <p>Сборники</p>
            </div>
            <div>
              <button className={styles.btn}>Ещё</button>
            </div>
          </div>
        </div>

        <div className={styles.compilation_elem}>
          <div className={styles.elem}>
            <div className={styles.name_elem}>
              <p>Латыпов Э.</p>
              <img src={star} alt="" />
            </div>
            <img className={styles.photo} src={latypov} alt="" /> 
          </div>
        </div>

        <div className={styles.compilations}>
          <div className={styles.inside}>
            <div>
              <p>События</p>
            </div>
            <div>
              <button className={styles.btn}>Ещё</button>
            </div>
          </div>
        </div>


         <div className={styles.events}>
            <div className={styles.card}>
             <div className={styles.card_image}>
               <img src={frame1} alt="" />
             </div>
             <div>
               <p className={styles.head}>Зеленый марафон</p>
               <p className={styles.secondary}>19.05.2024 Популярное</p>
             </div>
            </div>
          </div>


          <div className={styles.compilations}>
          <div className={styles.inside}>
            <div>
              <p>Тренеры</p>
            </div>
            <div>
              <button className={styles.btn}>Ещё</button>
            </div>
          </div>
        </div>
        

        <div className={styles.parent}>

          <div className={styles.child}>
          <div className={styles.card_image}>
               <img className={styles.imgs} src={sokolov} alt="" />
             </div>
             <div>
               <p className={styles.head}>Соколов А.</p>
               <p className={styles.secondary}>Тренер по триатлону</p>
             </div>
          </div>

          <div className={styles.child}>
            <div className={styles.card_image}>
               <img src={istomin} alt="" />
             </div>
             <div>
               <p className={styles.head}>Истомин А.</p>
               <p className={styles.secondary}>Тренер по биатлону</p>
             </div>
             </div>

          <div className={styles.child}>
            <div className={styles.card_image}>
               <img src={sorin} alt="" />
             </div>
             <div>
               <p className={styles.head}>Сорин Е.</p>
               <p className={styles.secondary}>Тренер по лыжным гонкам</p>
             </div>
             </div>

          <div className={styles.child}>
          <div className={styles.card_image}>
               <img src={orlova} alt="" />
             </div>
             <div>
               <p className={styles.head}>Орлова М.</p>
               <p className={styles.secondary}>Тренер по скелетону</p>
             </div>
          </div>

          <div className={styles.child}>
          <div className={styles.card_image}>
               <img src={kulikova} alt="" />
             </div>
             <div>
               <p className={styles.head}>Куликова Е.</p>
               <p className={styles.secondary}>Тренер по легкой атлетике</p>
             </div>
          </div>

          <div className={styles.child}>
          <div className={styles.card_image}>
               <img src={stepanova} alt="" />
             </div>
             <div>
               <p className={styles.head}>Степанова П.</p>
               <p className={styles.secondary}>Тренер по фитнесу</p>
             </div>
          </div>

        </div>

    </main>
  )
}
