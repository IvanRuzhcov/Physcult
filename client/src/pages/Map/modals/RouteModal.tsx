import React, { useState } from 'react'
import { CircleX } from 'lucide-react';
import styles from './css/RouteModal.module.css'
interface RouteModalProps {
  isRouteOpen: boolean
  onRouteClose: () => void
}

export default function RouteModal({ isRouteOpen, onRouteClose}: RouteModalProps): JSX.Element{

  const [isAnimating, setIsAnimating] = useState(false)

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onRouteClose();
      setIsAnimating(false);
    }, 300);
  };

  return (
    <>
      {isRouteOpen && (
        <div className={`${styles.modal} ${isAnimating ? styles.closing : ''}`}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={handleClose}>
            <CircleX />
            </span>
            <span className={styles.title}>Маршруты</span>
            <div className={styles.info}>
              <span className={styles.info_header}> Создавайте свои маршруты</span>
            <span className={styles.info_text}>Для внесения изменений о маршруте или составления нового маршрута, пожалуйста, посетите наш веб-сайт.</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
