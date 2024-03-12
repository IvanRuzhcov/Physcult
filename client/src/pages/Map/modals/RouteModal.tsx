import React from 'react'
import { CircleX } from 'lucide-react';
import styles from './css/RouteModal.module.css';

export default function RouteModal():JSX.Element {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <span>Маршруты</span>
        <span><CircleX size={28} /></span>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.title}>
        <span>Создавайте свои маршруты</span>
      </div>
      <div className={styles.information_text}>
        <p>Для внесения изменений о маршруте или составления нового маршрута, пожалуйста, посетите наш веб-сайт</p>
      </div>
    </div>
    
  )
}
