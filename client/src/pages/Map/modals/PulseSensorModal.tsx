import React, { useState } from 'react'
import { CircleX } from 'lucide-react';
import styles from './css/PulseSensorModal.module.css'
interface PulseModalProps {
  isPulseOpen: boolean
  onPulseClose: () => void
}

export default function PulseModal({ isPulseOpen, onPulseClose}: PulseModalProps): JSX.Element{

  const [isAnimating, setIsAnimating] = useState(false)

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onPulseClose();
      setIsAnimating(false);
    }, 300);
  };

  return (
    <>
      {isPulseOpen && (
        <div className={`${styles.modal} ${isAnimating ? styles.closing : ''}`}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={handleClose}>
            <CircleX />
            </span>
            <span className={styles.title}>Датчик пульса</span>
            <div className={styles.info}>
              <span className={styles.info_header}>ДОСТУПНЫЕ ДАТЧИКИ</span>
              <div className={styles.spinner}>
                   <div></div>   
                   <div></div>    
                   <div></div>    
                   <div></div>    
                   <div></div>    
                   <div></div>    
                   <div></div>    
                   <div></div>    
                   <div></div>    
                   <div></div>    
               </div>
            <span className={styles.info_text}>Выберите датчик, для сопряжения с телефоном.</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
