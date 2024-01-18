import React from 'react'
import styles from './OnboardingPage.module.css';
import heroImage from './onboardingimage2.jpeg';

export default function OnboardingPage():JSX.Element {
  return (
    <div className={styles.conteiner}>
      <div className={styles.image_conteiner}>
        <img src={heroImage} alt="" />
        <button className={styles.btn}>Авторизация</button> 
      </div>
    </div>
  )
}
