import React, { useState } from 'react'
import styles from './css/TrialsPage.module.css';
import star from '../../../assets/icons/Star.png';
import velo from '../../../assets/velo.png';
import run from '../../../assets/running.png';
import ski from '../../../assets/ski.png';
import gym from '../../../assets/gym.png';
import swim from '../../../assets/swim.png';
import swim100 from '../../../assets/swim100.png';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../Navbar/NavBar';

export default function TrialsPage():JSX.Element {
  const [activeBtn, setActiveBtn] = useState('main');
  const navigate = useNavigate()

  const handleMain = () => {
    setActiveBtn('main');
    navigate('/main')
  };
  const handleTests = () => {
    setActiveBtn('trials');
    navigate('/trials')
  };
  const handleFriends = () => {
    setActiveBtn('friend');
    navigate('/friend')
  };


  return (
    <main className={styles.conteiner}>

      <div className={styles.head}>
        <span className={styles.headline}>Сообщество</span>
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
                activeBtn === 'trials'
                  ? styles.on_progress
                  : styles.off_progress
              }
            >
              Испытания
            </div>
            <div
              className={
                activeBtn === 'trials' ? styles.active_line : styles.line
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

        <div className={styles.btn_group}>
          <button className={styles.btn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1.3335 11.6666C1.3335 10.0098 2.67664 8.66665 4.3335 8.66665H6.1335C6.55354 8.66665 6.76356 8.66665 6.92399 8.74839C7.06511 8.8203 7.17985 8.93503 7.25175 9.07615C7.3335 9.23659 7.3335 9.44661 7.3335 9.86665V11.6666C7.3335 13.3235 5.99035 14.6666 4.3335 14.6666C2.67664 14.6666 1.3335 13.3235 1.3335 11.6666Z" fill="#EA3525"/>
            <path d="M8.66683 4.33331C8.66683 2.67646 10.01 1.33331 11.6668 1.33331C13.3237 1.33331 14.6668 2.67646 14.6668 4.33331C14.6668 5.99017 13.3237 7.33331 11.6668 7.33331H9.52397C9.42446 7.33331 9.37471 7.33331 9.33286 7.3286C8.98514 7.28942 8.71072 7.015 8.67155 6.66729C8.66683 6.62543 8.66683 6.57568 8.66683 6.47617V4.33331Z" fill="#EA3525"/>
            <g opacity="0.5">
            <path d="M1.3335 4.33331C1.3335 2.67646 2.67664 1.33331 4.3335 1.33331C5.99035 1.33331 7.3335 2.67646 7.3335 4.33331V6.33331C7.3335 6.56581 7.3335 6.68205 7.30794 6.77743C7.23859 7.03625 7.03643 7.23841 6.77761 7.30776C6.68224 7.33331 6.56599 7.33331 6.3335 7.33331H4.3335C2.67664 7.33331 1.3335 5.99017 1.3335 4.33331Z" fill="#EA3525"/>
            <path d="M8.66683 9.66665C8.66683 9.43415 8.66683 9.31791 8.69239 9.22253C8.76174 8.96371 8.9639 8.76155 9.22272 8.6922C9.31809 8.66665 9.43434 8.66665 9.66683 8.66665H11.6668C13.3237 8.66665 14.6668 10.0098 14.6668 11.6666C14.6668 13.3235 13.3237 14.6666 11.6668 14.6666C10.01 14.6666 8.66683 13.3235 8.66683 11.6666V9.66665Z" fill="#EA3525"/>
            </g>
            </svg>Все</button>
          <button className={styles.btn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path opacity="0.5" d="M8.55492 14.5342C10.6389 14.1165 13.3333 12.6173 13.3333 8.74076C13.3333 5.21305 10.7511 2.86393 8.89435 1.78454C8.48234 1.54503 8 1.86002 8 2.33659V3.55558C8 4.51682 7.59585 6.27139 6.47288 7.00118C5.89955 7.37378 5.28035 6.81611 5.21067 6.1359L5.15345 5.57734C5.08693 4.928 4.42561 4.53382 3.90664 4.92971C2.97431 5.64094 2 6.88638 2 8.74076C2 13.4815 5.52593 14.6667 7.28889 14.6667C7.39143 14.6667 7.49919 14.6636 7.61138 14.6572C7.90866 14.6197 7.61138 14.7233 8.55492 14.5342Z" fill="#EA3525"/>
            <path d="M5.3335 12.2962C5.3335 14.0427 6.74104 14.5828 7.61154 14.6572C7.90882 14.6197 7.61154 14.7233 8.55508 14.5342C9.24752 14.2895 10.0002 13.6615 10.0002 12.2962C10.0002 11.431 9.45442 10.8972 9.02688 10.6474C8.89609 10.5709 8.7442 10.6672 8.7325 10.8182C8.69544 11.297 8.23575 11.6783 7.92258 11.3143C7.64583 10.9926 7.52957 10.5227 7.52957 10.2221V9.82927C7.52957 9.59245 7.29119 9.43556 7.08751 9.55639C6.33021 10.0057 5.3335 10.9299 5.3335 12.2962Z" fill="#EA3525"/>
            </svg>Начато</button>
          <button className={styles.btn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path opacity="0.5" d="M8.00016 10.7119L5.48586 13.3152C5.12578 13.688 4.94574 13.8744 4.79327 13.9389C4.44584 14.0859 4.06044 13.9601 3.87768 13.6401C3.79748 13.4996 3.77248 13.2463 3.7225 12.7396L3.7225 12.7396C3.69428 12.4535 3.68016 12.3105 3.63733 12.1907C3.54144 11.9225 3.33993 11.7139 3.0809 11.6146C2.9652 11.5702 2.82705 11.5556 2.55078 11.5264L2.55076 11.5264C2.06141 11.4746 1.81673 11.4488 1.68108 11.3657C1.37197 11.1765 1.25048 10.7774 1.39245 10.4177C1.45475 10.2598 1.63479 10.0734 1.99487 9.70059L3.63733 7.99997L4.4628 7.1745L8.00016 10.7119L11.5375 7.1745L12.363 7.99997L14.0055 9.70059L14.0055 9.70059C14.3655 10.0734 14.5456 10.2598 14.6079 10.4177C14.7498 10.7774 14.6284 11.1765 14.3192 11.3657C14.1836 11.4488 13.9389 11.4746 13.4496 11.5264C13.1733 11.5556 13.0351 11.5702 12.9194 11.6146C12.6604 11.7139 12.4589 11.9225 12.363 12.1907C12.3202 12.3105 12.3061 12.4535 12.2778 12.7396L12.2778 12.7396C12.2278 13.2463 12.2028 13.4996 12.1226 13.6401C11.9399 13.9601 11.5545 14.0859 11.2071 13.9389C11.0546 13.8744 10.8745 13.688 10.5145 13.3152L8.00016 10.7119Z" fill="#EA3525"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00016 10.6666C10.5775 10.6666 12.6668 8.57731 12.6668 5.99998C12.6668 3.42265 10.5775 1.33331 8.00016 1.33331C5.42283 1.33331 3.3335 3.42265 3.3335 5.99998C3.3335 8.57731 5.42283 10.6666 8.00016 10.6666ZM8.00016 3.99998C7.81079 3.99998 7.68413 4.2272 7.4308 4.68165L7.36526 4.79923C7.29327 4.92837 7.25727 4.99294 7.20115 5.03554C7.14503 5.07815 7.07513 5.09396 6.93534 5.12559L6.80807 5.15439C6.31613 5.26569 6.07017 5.32134 6.01165 5.50953C5.95313 5.69771 6.12081 5.89379 6.45618 6.28596L6.54295 6.38742C6.63825 6.49887 6.6859 6.55459 6.70734 6.62352C6.72877 6.69246 6.72157 6.7668 6.70716 6.91549L6.69404 7.05086C6.64334 7.5741 6.61799 7.83572 6.77119 7.95202C6.9244 8.06833 7.1547 7.96229 7.6153 7.75021L7.73446 7.69535C7.86535 7.63508 7.93079 7.60495 8.00016 7.60495C8.06953 7.60495 8.13498 7.63508 8.26587 7.69535L8.38503 7.75021C8.84563 7.96229 9.07593 8.06833 9.22913 7.95202C9.38234 7.83572 9.35699 7.5741 9.30628 7.05086L9.29317 6.91549C9.27876 6.76681 9.27155 6.69246 9.29299 6.62352C9.31443 6.55459 9.36208 6.49887 9.45737 6.38743L9.54414 6.28596C9.87951 5.8938 10.0472 5.69771 9.98868 5.50953C9.93016 5.32134 9.68419 5.26569 9.19226 5.15439L9.06499 5.12559C8.92519 5.09396 8.8553 5.07815 8.79917 5.03554C8.74305 4.99294 8.70706 4.92837 8.63507 4.79923L8.56953 4.68165C8.3162 4.2272 8.18954 3.99998 8.00016 3.99998Z" fill="#EA3525"/>
            </svg>Выполнено</button>
          <button className={styles.btn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10.0255 12.6073C11.987 11.0609 14.6667 9.33335 14.6667 6.0914C14.6667 2.84944 10.9999 0.550309 8 3.66709L7.38224 4.90235C7.1998 5.26716 7.10858 5.44956 7.15305 5.62866C7.19753 5.80776 7.36348 5.9263 7.69539 6.16337L8.44431 6.69832C8.86009 6.9953 9.06798 7.1438 9.09455 7.36236C9.12112 7.58092 8.95485 7.77489 8.62233 8.16284L7.93599 8.96357C7.65009 9.29712 7.50714 9.4639 7.51466 9.6597C7.52218 9.85551 7.6775 10.0108 7.98814 10.3215L8.26631 10.5996C8.46186 10.7952 8.55963 10.893 8.59479 11.0199C8.62995 11.1469 8.59642 11.281 8.52935 11.5493L8 13.6667C8.66667 13.6667 9.33333 13.1529 10.0255 12.6073Z" fill="#EA3525"/>
            <path opacity="0.5" d="M5.40434 12.1646C3.53229 10.7222 1.3335 9.02812 1.3335 6.0914C1.3335 2.84944 5.00027 0.550309 8.00016 3.66709L7.25499 5.15712C7.13336 5.40033 7.07255 5.52193 7.1022 5.64133C7.13185 5.76073 7.24248 5.83975 7.46376 5.9978L8.74081 6.90999C9.018 7.10798 9.15659 7.20698 9.17431 7.35268C9.19202 7.49839 9.08118 7.62771 8.8595 7.88633L7.73526 9.19794C7.54466 9.4203 7.44936 9.53149 7.45438 9.66202C7.45939 9.79256 7.56294 9.89611 7.77003 10.1032L8.39992 10.7331C8.53029 10.8635 8.59547 10.9286 8.61891 11.0133C8.64235 11.0979 8.62 11.1873 8.57528 11.3662L8.00016 13.6667C7.3335 13.6667 6.66683 13.1529 5.97465 12.6073C5.78997 12.4617 5.59892 12.3145 5.40434 12.1646Z" fill="#EA3525"/>
            </svg>Не_выполнено</button>
          <button className={styles.btn}>Неактивные</button>
        </div>


        <div className={styles.test_conteiner}>

          <div className={styles.test_target}>
            <div className={styles.test_name}>
              <span>Силовая тренировка</span>
              <img src={star} alt="" />
            </div>
            <img  className={styles.photo1} src={gym} alt="" />
            <div className={styles.task}>
              <span>8_заданий</span>
            </div>
          </div>

          <div className={styles.test_target}>
            <div className={styles.test_name}>
              <span>Лыжи: конек</span>
              <img src={star} alt="" />
            </div>
            <img  className={styles.photo2} src={ski} alt="" />
            <div className={styles.task}>
              <span>12_заданий</span>
            </div> 
          </div>

          <div className={styles.test_target}>
           <div className={styles.test_name}>
             <span>Бег на длинные дистанции</span>
             <img src={star} alt="" />
           </div>
           <img  className={styles.photo3} src={run} alt="" />
           <div className={styles.task}>
              <span>12_заданий</span>
            </div>  
          </div>

          <div className={styles.test_target}>
           <div className={styles.test_name}>
            <span>Плавание на 100 метров</span>
            <img src={star} alt="" />
           </div>
           <img  className={styles.photo4} src={swim100} alt="" />
           <div className={styles.task}>
              <span>8_заданий</span>
            </div> 
          </div>

          <div className={styles.test_target}>
           <div className={styles.test_name}>
            <span>Плавание в открытой воде</span>
            <img src={star} alt="" />
           </div>
           <img  className={styles.photo5} src={swim} alt="" />
           <div className={styles.task}>
              <span>10_заданий</span>
            </div> 
          </div>

          <div className={styles.test_target}>
            <div className={styles.test_name}>
              <span>Велосипед</span>
              <img src={star} alt="" />
            </div>
            <img  className={styles.photo6} src={velo} alt="" />
            <div className={styles.task}>
              <span>8_заданий</span>
            </div> 
          </div>
        </div>
        <div className={styles.footer}></div>
        <NavBar/>
    </main>
  )
}
