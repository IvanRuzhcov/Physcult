import React from 'react'
import { MapPin } from 'lucide-react';
import styles from './css/StopwatchModal.module.css';

export default function StopwatchModal():JSX.Element {
  return (
    <div>
      <span>Время</span>
      <span>00:00:01</span>
      <div className={styles.divider}></div>
      <span>Средняя скорость</span>
      <span>00,0</span>
      <div className={styles.divider}></div>
      <span>Расстояние</span>
      <span>00,0</span>

      <div className={styles.container_stop_button}>
           <button className={styles.stop_button}>СТАРТ</button>
           <span><MapPin size={28} /></span>
         </div>
    </div>
  )
}

