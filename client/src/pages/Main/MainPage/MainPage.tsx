import styles from './css/MainPage.module.css';
import star from '../../../assets/icons/Star.png';
import alert from '../../../assets/icons/NotificationAlert.png';
import market from '../../../assets/PhyscultMARKET.png';

import Green_Marathon from '../../../assets/events/Green_Marathon.png';
import TheLegkovRace from '../../../assets/events/TheLegkovRace.png';
import Moscow_marathon from '../../../assets/events/Moscow_marathon.png';
import race_rf from '../../../assets/events/banner_of_the_race_rf.png';
import white_nights from '../../../assets/events/white_nights.png';

import istomin from '../../../assets/istomin.png';
import kulikova from '../../../assets/kulikova.png';
import sorin from '../../../assets/sorin.png';
import orlova from '../../../assets/orlova.png';
import stepanova from '../../../assets/stepanova.png';
import sokolov from '../../../assets/sokolov.png';
import NavBar from '../../Navbar/NavBar';
import MainNavbar from './component/MainNavbar';
import CollectionFeed from './component/CollectionFeed';

export default function MainPage(): JSX.Element {
  const events = [
    {
      id: 1,
      photo: TheLegkovRace,
      name: 'Гонка Легкова',
      date: '23-24.02.2024',
    },
    {
      id: 2,
      photo: Green_Marathon,
      name: 'Зеленый Марафон',
      date: '19.05.2024',
    },
    {
      id: 3,
      photo: Moscow_marathon,
      name: 'Московский Марафон ',
      date: '15.09.2024',
    },
    {
      id: 4,
      photo: race_rf,
      name: 'Забег.рф',
      date: '29.06.2024',
    },
    {
      id: 5,
      photo: white_nights,
      name: 'Марафон Белые Ночи',
      date: '29.06.2024',
    },
  ];
  return (
    <>
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

        <MainNavbar />

        <div className={styles.physcult_market}>
          <div className={styles.img_market}>
            <img src={market} alt="" />
          </div>
        </div>

        <CollectionFeed />

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
          {events.map((event) => {
            return (
              <div key={event.id} className={styles.card}>
                <div className={styles.card_image}>
                  <img src={event.photo} alt="" />
                </div>
                <div className={styles.text_box}>
                  <p className={styles.head}>{event.name}</p>
                  <p
                    className={styles.secondary}
                  >{`${event.date} • Популярное`}</p>
                </div>
              </div>
            );
          })}
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
          <div className={styles.section}>
            <div className={styles.child}>
              <div className={styles.card_img}>
                <div className={styles.star_box_tranier}>
                  <img src={star} alt="" />
                </div>
                <img className={styles.photo_1} src={sokolov} alt="" />
              </div>

              <div className={styles.child_title}>
                <p className={styles.head}>Соколов А.</p>
                <p className={styles.secondary}>Тренер по Триатлону</p>
              </div>
            </div>

            <div className={styles.child}>
              <div className={styles.card_img}>
                <div className={styles.star_box_tranier}>
                  <img src={star} alt="" />
                </div>
                <img className={styles.photo_2} src={istomin} alt="" />
              </div>
              <div className={styles.child_title}>
                <p className={styles.head}>Истомин А.</p>
                <p className={styles.secondary}>Тренер по Биатлону</p>
              </div>
            </div>

            <div className={styles.child}>
              <div className={styles.card_img}>
                <div className={styles.star_box_tranier}>
                  <img src={star} alt="" />
                </div>
                <img className={styles.photo_3} src={sorin} alt="" />
              </div>
              <div className={styles.child_title}>
                <p className={styles.head}>Сорин Е.</p>
                <p className={styles.secondary}>Тренер по Лыжным гонкам</p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.child}>
              <div className={styles.card_img}>
                <div className={styles.star_box_tranier}>
                  <img src={star} alt="" />
                </div>
                <img className={styles.photo_4} src={orlova} alt="" />
              </div>
              <div className={styles.child_title}>
                <p className={styles.head}>Орлова М.</p>
                <p className={styles.secondary}>Тренер по Скелетону</p>
              </div>
            </div>

            <div className={styles.child}>
              <div className={styles.card_img}>
                <div className={styles.star_box_tranier}>
                  <img src={star} alt="" />
                </div>
                <img className={styles.photo_5} src={kulikova} alt="" />
              </div>
              <div className={styles.child_title}>
                <p className={styles.head}>Куликова Е.</p>
                <p className={styles.secondary}>Тренер по Легкой Атлетике</p>
              </div>
            </div>

            <div className={styles.child}>
              <div className={styles.card_img}>
                <div className={styles.star_box_tranier}>
                  <img src={star} alt="" />
                </div>
                <img className={styles.photo_6} src={stepanova} alt="" />
              </div>
              <div className={styles.child_title}>
                <p className={styles.head}>Степанова П.</p>
                <p className={styles.secondary}>Тренер по Фитнесу</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}></div>
        <NavBar />
      </main>
    </>
  );
}
