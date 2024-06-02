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
import NavBar from '../../Navbar/NavBar';
import MainNavbar from '../MainPage/component/MainNavbar';
import {Plus} from 'lucide-react'

export default function FriendsPage(): JSX.Element {
 
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

        <div className={styles.friend}>
          <div className={styles.photo}>
            <img src={stepanova} alt="" />
          </div>
          <div className={styles.name_friend}>
            <p className={styles.name}>Вероника Степанова</p>
            <p className={styles.nik_name}>@stepanova</p>
          </div>
          
            <button className={styles.btn_subscription}>Подписаться</button>
          
        </div>

        <div className={styles.friend}>
          <div className={styles.photo}>
            <img src={malyshko} alt="" />
          </div>
          <div className={styles.name_friend}>
            <p className={styles.name}>Дмитрий Малышко</p>
            <p className={styles.nik_name}>@malyshko</p>
          </div>
          
            <button className={styles.btn_subscription}>Подписаться</button>
          
        </div>

        <div className={styles.friend}>
          <div className={styles.photo}>
            <img src={lekar} alt="" />
          </div>
          <div className={styles.name_friend}>
            <p className={styles.name}>Алексей Лекарев</p>
            <p className={styles.nik_name}>@lekarev</p>
          </div>
          
            <button className={styles.btn_subscription}>Подписаться</button>
         
        </div>

        <div className={styles.friend}>
          <div className={styles.photo}>
            <img src={tsekulin} alt="" />
          </div>
          <div className={styles.name_friend}>
            <p className={styles.name}>Анатолий Цекулин</p>
            <p className={styles.nik_name}>@tsekulin</p>
          </div>
          
            <button className={styles.btn_subscription}>Подписаться</button>
          
        </div>

        <div className={styles.friend}>
          <div className={styles.photo}>
            <img src={legkov} alt="" />
          </div>
          <div className={styles.name_friend}>
            <p className={styles.name}>Александр Легков</p>
            <p className={styles.nik_name}>@legkov</p>
          </div>
          
            <button className={styles.btn_subscription}>Подписаться</button>
          
        </div>

        <div className={styles.friend}>
          <div className={styles.photo}>
            <img src={blanin} alt="" />
          </div>
          <div className={styles.name_friend}>
            <p className={styles.name}>Алексей Бланин</p>
            <p className={styles.nik_name}>@blanin</p>
          </div>
          
            <button className={styles.btn_subscription}>Подписаться</button>
          
        </div>

        <div className={styles.friend}>
          <div className={styles.photo}>
            <img src={shipulin} alt="" />
          </div>
          <div className={styles.name_friend}>
            <p className={styles.name}>Антон Шипулин</p>
            <p className={styles.nik_name}>@shipulin</p>
          </div>
          
            <button className={styles.btn_subscription}>Подписаться</button>
          
        </div>

        <div className={styles.friend}>
          <div className={styles.photo}>
            <img src={guberniev} alt="" />
          </div>
          <div className={styles.name_friend}>
            <p className={styles.name}>Дмитрий Губерниев</p>
            <p className={styles.nik_name}>@guberniev</p>
          </div>
          
            <button className={styles.btn_subscription}>Подписаться</button>
          
        </div>

        <div className={styles.friend}>
          <div className={styles.photo}>
            <img src={gerbulova} alt="" />
          </div>
          <div className={styles.name_friend}>
            <p className={styles.name}>Наталья Гербулова</p>
            <p className={styles.nik_name}>@gerbulova</p>
          </div>
          
            <button className={styles.btn_subscription}>Подписаться</button>
          
        </div>
      </div>
      <div className={styles.footer}></div>
      <NavBar />
    </main>
  );
}
