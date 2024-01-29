import React, { memo } from 'react';
import style from '../css/NewsFeed.module.css'
import malyshko from '../../../assets/malyshko.png';
import lekarev from '../../../assets/lekarev.png';
import tsekulin from '../../../assets/tsekulin.png';
import blanin from '../../../assets/blanin.png';

function History() {
    const historyUser = {
        photo: malyshko,
        name: 'malyshko',
        history:
          'https://static.news.ru/photo/37bf9717-fa52-4209-b747-b7214ba533a8_1024.jpg',
      };

    const history = [
        {
          photo: lekarev,
          name: 'lekarev',
          history:
            'https://static.news.ru/photo/37bf9717-fa52-4209-b747-b7214ba533a8_1024.jpg',
        },
        {
          photo: tsekulin,
          name: 'tsekulin',
          history:
            'https://static.news.ru/photo/37bf9717-fa52-4209-b747-b7214ba533a8_1024.jpg',
        },
        {
          photo: blanin,
          name: 'blanin',
          history:
            'https://static.news.ru/photo/37bf9717-fa52-4209-b747-b7214ba533a8_1024.jpg',
        },
        {
          photo: blanin,
          name: 'blanin',
          history:
            'https://static.news.ru/photo/37bf9717-fa52-4209-b747-b7214ba533a8_1024.jpg',
        },
        {
          photo: blanin,
          name: 'blanin',
          history:
            'https://static.news.ru/photo/37bf9717-fa52-4209-b747-b7214ba533a8_1024.jpg',
        },
        {
          photo: blanin,
          name: 'blanin',
          history:
            'https://static.news.ru/photo/37bf9717-fa52-4209-b747-b7214ba533a8_1024.jpg',
        },
        {
          photo: blanin,
          name: 'blanin',
          history:
            'https://static.news.ru/photo/37bf9717-fa52-4209-b747-b7214ba533a8_1024.jpg',
        },
      ];
    return (
        <>
        <div className={style.history_feed}>
        <div className={style.history}>
          <img src={historyUser.photo} alt="" />
          <div className={style.history_name}>
            <span>{historyUser.name}</span>
          </div>
        </div>
        {history.map((el) => {
          return (
            <div className={style.history}>
              <img src={el.photo} alt="" />
              <div className={style.history_name}>
                <span>{el.name}</span>
              </div>
            </div>
          );
        })}
      </div>
        </>
    );
}

export default memo(History);