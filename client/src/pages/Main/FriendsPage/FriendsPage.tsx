import React, {useState} from 'react'
import styles from './css/FriendsPage.module.css';
import stepanova from '../../../assets/stepan.png';
import malyshko from '../../../assets/malyshk.png';
import lekar from '../../../assets/lekar.png';
import tsekulin from '../../../assets/tolik.png';
import legkov from '../../../assets/legkov.png';
import blanin from '../../../assets/blanin1.png';
import shipulin from '../../../assets/shipulin.png';
import guberniev from '../../../assets/guber.png';
import gerbulova from '../../../assets/gerbulova.png';
import { useNavigate } from 'react-router-dom';


export default function FriendsPage():JSX.Element {
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
      

      <div className={styles.input_conteiner}>
        <div className={styles.group}>
          <svg className={styles.icon}aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
          <input placeholder="Поиск" type="search" className={styles.input}/>
        </div>
      </div>


      <div className={styles.friend_conteiner}>

      <div className={styles.friend}>
      <div className={styles.photo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
          <g filter="url(#filter0_b_429_4366)">
          <rect width="50" height="50" rx="25" fill="#FF0606" fill-opacity="0.05"/>
          <path d="M26.4 19.4C26.4 18.6268 25.7732 18 25 18C24.2268 18 23.6 18.6268 23.6 19.4L23.6 23.6H19.4C18.6268 23.6 18 24.2268 18 25C18 25.7732 18.6268 26.4 19.4 26.4H23.6V30.6C23.6 31.3732 24.2268 32 25 32C25.7732 32 26.4 31.3732 26.4 30.6L26.4 26.4H30.6C31.3732 26.4 32 25.7732 32 25C32 24.2268 31.3732 23.6 30.6 23.6H26.4V19.4Z" fill="#FF0606"/>
          </g>
          <defs>
          <filter id="filter0_b_429_4366" x="-7" y="-7" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.5"/>
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_429_4366"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_429_4366" result="shape"/>
          </filter>
          </defs>
        </svg>
      </div>
          <div className={styles.name_friend}>
            <p className={styles.name}>Пригласить друзей</p>
          </div>
          <div className={styles.btn_sub}>
            <button>Пригласить</button>
          </div>
      </div>

        <div className={styles.friend}>
          <div className={styles.photo}>
            <img src={stepanova} alt="" />
          </div>
          <div className={styles.name_friend}>
            <p className={styles.name}>Вероника Степанова</p>
            <p className={styles.nik_name}>@stepanova</p>
          </div>
          <div className={styles.btn_sub}>
            <button>Подписаться</button>
          </div>
        </div>

        <div className={styles.friend}>
        <div className={styles.photo}>
            <img src={malyshko} alt="" />
          </div>
          <div className={styles.name_friend}>
            <p className={styles.name}>Дмитрий Малышко</p>
            <p className={styles.nik_name}>@malyshko</p>
          </div>
          <div className={styles.btn_sub}>
            <button>Подписаться</button>
          </div>
        </div>

        <div className={styles.friend}>
        <div className={styles.photo}>
            <img src={lekar} alt="" />
          </div>
          <div className={styles.name_friend}>
            <p className={styles.name}>Алексей Лекарев</p>
            <p className={styles.nik_name}>@lekarev</p>
          </div>
          <div className={styles.btn_sub}>
            <button>Подписаться</button>
          </div>
        </div>

        <div className={styles.friend}>
        <div className={styles.photo}>
            <img src={tsekulin} alt="" />
          </div>
          <div className={styles.name_friend}>
            <p className={styles.name}>Анатолий Цекулин</p>
            <p className={styles.nik_name}>@tsekulin</p>
          </div>
          <div className={styles.btn_sub}>
            <button>Подписаться</button>
          </div>
        </div>

        <div className={styles.friend}>
        <div className={styles.photo}>
            <img src={legkov} alt="" />
          </div>
          <div className={styles.name_friend}>
            <p className={styles.name}>Александр Легков</p>
            <p className={styles.nik_name}>@legkov</p>
          </div>
          <div className={styles.btn_sub}>
            <button>Подписаться</button>
          </div>
        </div>

        <div className={styles.friend}>
        <div className={styles.photo}>
            <img src={blanin} alt="" />
          </div>
          <div className={styles.name_friend}>
            <p className={styles.name}>Алексей Бланин</p>
            <p className={styles.nik_name}>@blanin</p>
          </div>
          <div className={styles.btn_sub}>
            <button>Подписаться</button>
          </div>
        </div>

        <div className={styles.friend}>
        <div className={styles.photo}>
            <img src={shipulin} alt="" />
          </div>
          <div className={styles.name_friend}>
            <p className={styles.name}>Антон Шипулин</p>
            <p className={styles.nik_name}>@shipulin</p>
          </div>
          <div className={styles.btn_sub}>
            <button>Подписаться</button>
          </div>
        </div>

        <div className={styles.friend}>
        <div className={styles.photo}>
            <img src={guberniev} alt="" />
          </div>
          <div className={styles.name_friend}>
            <p className={styles.name}>Дмитрий Губерниев</p>
            <p className={styles.nik_name}>@guberniev</p>
          </div>
          <div className={styles.btn_sub}>
            <button>Подписаться</button>
          </div>
        </div>

        <div className={styles.friend}>
        <div className={styles.photo}>
            <img src={gerbulova} alt="" />
          </div>
          <div className={styles.name_friend}>
            <p className={styles.name}>Наталья Гербулова</p>
            <p className={styles.nik_name}>@gerbulova</p>
          </div>
          <div className={styles.btn_sub}>
            <button>Подписаться</button>
          </div>
        </div>

      </div>  


    </main>
  )
}
