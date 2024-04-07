import React, { memo } from 'react';
import awards1 from '../../../assets/awards/awards1.png';
import awards2 from '../../../assets/awards/awards2.png';
import style from '../css/PersonalPage.module.css';

function AwardsContainer() {
  const awards = [
    {
      id: 1,
      pfoto: awards1,
      awards: 'первые 10 километров',
    },
    {
      id: 2,
      pfoto: awards1,
      awards: `первые 10 километров`,
    },
    {
      id: 3,
      pfoto: awards1,
      awards: 'первые 10 километров',
    },
    {
      id: 4,
      pfoto: awards1,
      awards: 'первые 10 километров',
    },
    {
      id: 5,
      pfoto: awards2,
      awards: 'первый километр',
    },
    {
      id: 6,
      pfoto: awards2,
      awards: 'первый километр',
    },
    {
      id: 7,
      pfoto: awards2,
      awards: 'первые километр',
    },
  ];

  return (
    <>
      <div className={style.award_container}>
        <span>Награды</span>
        <div className={style.awards_slider}>
          {awards.map((award) => {
            return (
              <div key={award.id} className={style.award_box}>
                <div className={style.award_img}>
                  <img src={award.pfoto} alt="" />
                </div>
                <div className={style.award_text}>{award.awards}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default memo(AwardsContainer);
