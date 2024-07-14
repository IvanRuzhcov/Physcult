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
          <div className={styles.modal_pulse_container}>
            <header className={styles.modal_pulse_header}>
               <div className={styles.pulse_header_title}>
                 <span>Датчик пульса</span>
               </div>
               <div onClick={handleClose}>
                  <CircleX />
               </div>
            </header>
            <div className={styles.divider_header}></div>

            <div className={styles.info}>
              <span className={styles.info_header}>Доступные датчики</span>
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
            <p className={styles.info_text}>Выберите датчик, для сопряжения с телефоном.</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
