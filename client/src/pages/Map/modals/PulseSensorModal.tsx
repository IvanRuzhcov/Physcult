import React from 'react'
import { CircleCheck } from 'lucide-react';
import styles from './css/PulseSensorModal.module.css';
interface ModalPulseProps {
  modalPulse: boolean;
  handleModalPulse: () => void;
}

export default function PulseSensorModal({ modalPulse, handleModalPulse }: ModalPulseProps):JSX.Element {
  return (
    <>

    <div className={modalPulse ? styles.modal_activ : styles.modal}>
      <div className={styles.overlay} onClick={handleModalPulse}>
        <div className={styles.modal_content}>
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
      </div>
    </div>

    </>
  )
}
