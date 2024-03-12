import React from 'react'
import { CircleCheck } from 'lucide-react';
import styles from './css/PulseSensorModal.module.css';

export default function PulsSensorModal():JSX.Element {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <span>Датчик пульса</span>
        <span><CircleCheck size={28} /></span>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.title}>
        <span>Доступные датчики</span>
      </div>
      <div className={styles.information_text}>
        <p>Выберите датчик для сопряжения с телефоном.</p>
      </div>
    </div>
  )
}
