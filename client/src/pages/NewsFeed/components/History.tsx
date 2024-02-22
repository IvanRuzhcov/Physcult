import React, { memo, useMemo } from 'react';
import style from '../css/NewsFeed.module.css';
import noPhoto from '../../../assets/no_avatar.png';
import lekarev from '../../../assets/lekarev.png';
import tsekulin from '../../../assets/tsekulin.png';
import blanin from '../../../assets/blanin.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

function truncateNick(nick: string): string {
  const maxLength = 11;
  return nick.length > maxLength ? nick.slice(0, maxLength) + '...' : nick;
}

function History() {
  const user = useSelector((store: RootState) => store.auth.user);

  const history = [
    {
      id: 1,
      photo: lekarev,
      name: 'lekarev',
      history:
        'https://static.news.ru/photo/37bf9717-fa52-4209-b747-b7214ba533a8_1024.jpg',
    },
    {
      id: 2,
      photo: tsekulin,
      name: 'tsekulin',
      history:
        'https://static.news.ru/photo/37bf9717-fa52-4209-b747-b7214ba533a8_1024.jpg',
    },
    {
      id: 3,
      photo: blanin,
      name: 'blanin',
      history:
        'https://static.news.ru/photo/37bf9717-fa52-4209-b747-b7214ba533a8_1024.jpg',
    },
  ];

  const truncatedNick = useMemo(() => truncateNick(user?.nick || ''), [user?.nick]);
  return (
    <>
      <div className={style.history_feed}>
        <div className={style.history}>
          <img src={user?.avatar_img || noPhoto} alt="" />
          <div className={style.history_name}>
            <span>{truncatedNick}</span>
          </div>
        </div>
        {history.map((el) => {
          return (
            <div key={el.id} className={style.history}>
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
