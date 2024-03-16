import React from 'react'
import { CircleX } from 'lucide-react';
import styles from './css/RouteModal.module.css';
interface ModalRouteProps {
  modalRoute: boolean;
  handleModalRoute: () => void;
}

export default function RouteModal({ modalRoute, handleModalRoute }: ModalRouteProps):JSX.Element {
  return (
    <>
    <div className={modalRoute ? styles.modal_activ : styles.modal}>
      <div className={styles.overlay_r} onClick={handleModalRoute}>
        <div className={styles.modal_content_r}>
        <div className={styles.header_r}>
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
      </div>
    </div>
    </>
  )
}
