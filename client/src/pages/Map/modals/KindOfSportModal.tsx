import React, { useState } from 'react'
import { CircleX, Bike, Check, CableCar, Footprints, Waves, PersonStanding, Snowflake } from 'lucide-react';
import styles from './css/KindOfSportModal.module.css'
interface SportModalProps {
  isSportOpen: boolean
  onSportClose: () => void
}

type SportType = 'bike' | 'waves' | 'cableCar' | 'personStanding' | 'footprints' | 'snowflake';

export default function KindOfSportModal({ isSportOpen, onSportClose}: SportModalProps): JSX.Element{

  const[isChecked, setIsChecked] = useState<Record<SportType, boolean>>({
    bike: false,
    waves: false,
    cableCar: false,
    personStanding: false,
    footprints: false,
    snowflake: false
  });

  const handleSportItemClick = (sport: SportType) => {
    setIsChecked({ ...isChecked, [sport]: !isChecked[sport] });
  };

  const [isAnimating, setIsAnimating] = useState(false)

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onSportClose();
      setIsAnimating(false);
    }, 300);
  };

  return (
    <>
      {isSportOpen && (
        <div className={`${styles.modal} ${isAnimating ? styles.closing : ''}`}>
          <div className={styles.modal_container}>
            <div className={styles.modal_content}>

            <header className={styles.modal_header}>
                <div className={styles.header_title}>
                   <span>Вид спорта</span> 
                </div>
                <div onClick={handleClose}>
                    <CircleX strokeWidth={2} color='#000' size={24} />
                </div>
            </header>
            <div className={styles.divider_header}></div>
              <div className={styles.sport_item} onClick={() => handleSportItemClick('bike')}>
                <div className={styles.sport_icon}>
                   <div className={`${styles.btn_icon_of} ${isChecked.bike ? styles.active : ''}`}>
                     <Bike color='#fff' size={26}/>
                   </div>
                   <span>Велоспорт</span>
                </div>
                {isChecked.bike && <span><Check color="#ff0606" /></span>}
              </div>
              <div className={styles.divider}></div>
              <div  className={styles.sport_item} onClick={() => handleSportItemClick('waves')}>
                <div className={styles.sport_icon}>
                   <div className={`${styles.btn_icon_of} ${isChecked.waves ? styles.active : ''}`}>
                     <Waves color='#fff' size={26}/>
                   </div>
                   <span>Плавание</span>
                </div>
                {isChecked.waves && <span><Check color="#ff0606" /></span>}
              </div>
              <div className={styles.divider}></div>
              <div className={styles.sport_item} onClick={() => handleSportItemClick('cableCar')}>
              <div className={styles.sport_icon}>
                <div className={`${styles.btn_icon_of} ${isChecked.cableCar ? styles.active : ''}`}>
                  <CableCar color='#fff' size={26}/>
                  </div>
                <span>Лыжи</span>
                </div>
                {isChecked.cableCar && <span><Check color="#ff0606" /></span>}
              </div>
              <div className={styles.divider}></div>
              <div className={styles.sport_item} onClick={() => handleSportItemClick('personStanding')}>
              <div className={styles.sport_icon}>
                <div className={`${styles.btn_icon_of} ${isChecked.personStanding ? styles.active : ''}`}>
                  <PersonStanding color='#fff' size={26}/>
                  </div>
                <span>Бег</span>
                </div>
                {isChecked.personStanding && <span><Check color="#ff0606" /></span>}
              </div>
              <div className={styles.divider}></div>
              <div className={styles.sport_item} onClick={() => handleSportItemClick('footprints')}>
              <div className={styles.sport_icon}>
                <div className={`${styles.btn_icon_of} ${isChecked.footprints ? styles.active : ''}`}>
                  <Footprints color='#fff' size={26}/>
                  </div>
                <span>Ходьба</span>
                </div>
                {isChecked.footprints && <span><Check color="#ff0606" /></span>}
              </div>
              <div className={styles.divider}></div>
              <div className={styles.sport_item} onClick={() => handleSportItemClick('snowflake')}>
                  <div className={styles.sport_icon}>
                      <div className={`${styles.btn_icon_of} ${isChecked.snowflake ? styles.active : ''}`}>
                        <Snowflake color='#fff' size={26}/>
                      </div>
                      <span>Коньки</span>
                </div>
                {isChecked.snowflake && <span><Check color="#ff0606" /></span>}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
