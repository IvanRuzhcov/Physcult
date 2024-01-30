import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './css/OnboardingPage.module.css';

export default function OnboardingPage():JSX.Element {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/auth');
  };

  return (
    <div className={styles.image_container}>
    <div className={styles.overlay}></div>
    <div className={styles.content}>
      <button onClick={handleRedirect} className={styles.btn}>
        Авторизация
      </button>
    </div>
  </div>
  )
}
