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
          <div className={styles.modal_route_container}>
            <header className={styles.modal_route_header}>
                 <div className={styles.route_header_title}>
                    <span>Маршруты</span>
                  </div>
                 <div  onClick={handleClose}>
                   <CircleX />
                 </div>
            </header>
            <div className={styles.divider_header}></div>
            <div className={styles.info}>
               <span className={styles.info_header}>
                   Создавайте свои маршруты
                </span>
               <p className={styles.info_text}>
                    Для внесения изменений о маршруте или составления нового маршрута, пожалуйста, посетите наш веб-сайт.
                </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
