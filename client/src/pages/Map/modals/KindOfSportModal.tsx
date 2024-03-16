import React from 'react'
import { CircleX, Trophy, Bike } from 'lucide-react';
import styles from './css/KindOfSportModal.module.css';
interface ModalKindProps {
  modalKind: boolean;
  handleModalKind: () => void;
}

export default function KindOfSportModal({ modalKind, handleModalKind }: ModalKindProps):JSX.Element {
  return (
    <>
    <div className={modalKind ? styles.module_activ : styles.modal}>
      <div className={styles.overlay} onClick={handleModalKind}>
        <div className={styles.modal_content}>
        <div className={styles.header}>
            <div className={styles.header_title}>Вид спорта</div>
            <div className={styles.header_icon}><CircleX size={28}/></div>
          </div>
          <div className={styles.title}>
            <Bike strokeWidth={1.5} color="#ff0606" size={34} />
            <div className={styles.text_item}>
              <span>Велоспорт</span>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.title}>
            <Trophy strokeWidth={1.5} size={34}/>
            <div className={styles.text_item}>
              <span>Бег</span>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.title}>
            <Trophy strokeWidth={1.5} size={34}/>
            <div className={styles.text_item}>
              <span>Ходьба</span>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.title}>
            <Trophy strokeWidth={1.5} size={34}/>
            <div className={styles.text_item}>
              <span>Лыжи</span>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.title}>
            <Trophy strokeWidth={1.5} size={34}/>
            <div className={styles.text_item}>
              <span>Плавание</span>
            </div>
          </div>
          <div className={styles.divider}></div>
        </div>
      </div>
    </div>
    </>
  )
}
