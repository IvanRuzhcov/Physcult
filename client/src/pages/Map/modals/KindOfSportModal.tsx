import React from 'react'
import { CircleCheck } from 'lucide-react';
import styles from './css/KindOfSportModal.module.css';

export default function KindOfSportModal():JSX.Element {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <span>Вид спорта</span>
        <span><CircleCheck size={28} /></span>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.title}>
        <span>Велоспорт</span>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.title}>
        <span>Бег</span>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.title}>
        <span>Ходьба</span>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.title}>
        <span>Лыжи</span>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.title}>
        <span>Плавание</span>
      </div>
    </div>
  )
}
