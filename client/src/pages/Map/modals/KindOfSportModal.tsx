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
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={handleClose}>
            <CircleX />
            </span>
            <span className={styles.title}>Вид спорта</span>
            <div className={styles.kind_of_sport}>

              <div className={styles.sport_item} onClick={() => handleSportItemClick('bike')}>
                <div className={styles.sport_icon}>
                <div className={`${styles.btn_icon_of} ${isChecked.bike ? styles.active : ''}`}><Bike size={26}/></div>
                <span>Велоспорт</span>
                </div>
                {isChecked.bike && <span><Check color="#3e9392" /></span>}
              </div>

              <div  className={styles.sport_item} onClick={() => handleSportItemClick('waves')}>
              <div className={styles.sport_icon}>
                <div className={`${styles.btn_icon_of} ${isChecked.waves ? styles.active : ''}`}><Waves size={26}/></div>
                <span>Плавание</span>
                </div>
                {isChecked.waves && <span><Check color="#3e9392" /></span>}
              </div>

              <div className={styles.sport_item} onClick={() => handleSportItemClick('cableCar')}>
              <div className={styles.sport_icon}>
                <div className={`${styles.btn_icon_of} ${isChecked.cableCar ? styles.active : ''}`}><CableCar size={26}/></div>
                <span>Лыжи</span>
                </div>
                {isChecked.cableCar && <span><Check color="#3e9392" /></span>}
              </div>

              <div className={styles.sport_item} onClick={() => handleSportItemClick('personStanding')}>
              <div className={styles.sport_icon}>
                <div className={`${styles.btn_icon_of} ${isChecked.personStanding ? styles.active : ''}`}><PersonStanding size={26}/></div>
                <span>Бег</span>
                </div>
                {isChecked.personStanding && <span><Check color="#3e9392" /></span>}
              </div>

              <div className={styles.sport_item} onClick={() => handleSportItemClick('footprints')}>
              <div className={styles.sport_icon}>
                <div className={`${styles.btn_icon_of} ${isChecked.footprints ? styles.active : ''}`}><Footprints size={26}/></div>
                <span>Ходьба</span>
                </div>
                {isChecked.footprints && <span><Check color="#3e9392" /></span>}
              </div>

              <div className={styles.sport_item} onClick={() => handleSportItemClick('snowflake')}>
              <div className={styles.sport_icon}>
                <div className={`${styles.btn_icon_of} ${isChecked.snowflake ? styles.active : ''}`}><Snowflake size={26}/></div>
                <span>Коньки</span>
                </div>
                {isChecked.snowflake && <span><Check color="#3e9392" /></span>}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
