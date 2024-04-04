import React, { useState } from 'react';
import styles from '../css/Messenger.module.css';

function ChatNavBar() {
    const [isClicked, setIsClicked] = useState<string>('');
    return (
       <>
       <div className={styles.nav_btn_group}>
          <button className={`${styles.trials_btn} ${isClicked === 'all'? styles.clicked : ''}`} onClick={() => setIsClicked('all')}><span>Все</span></button>
          <button className={`${styles.trials_btn} ${isClicked === 'phy'? styles.clicked : ''}`} onClick={() => setIsClicked('phy')}><span>Physcult</span></button>
          <button className={`${styles.trials_btn} ${isClicked === 'sky'? styles.clicked : ''}`} onClick={() => setIsClicked('sky')}><span>Лыжи</span></button> 
          <button className={`${styles.trials_btn} ${isClicked === 'run'? styles.clicked : ''}`} onClick={() => setIsClicked('run')}><span>Бег</span></button>
          <button className={`${styles.trials_btn} ${isClicked === 'bck'? styles.clicked : ''}`} onClick={() => setIsClicked('bck')}><span>Велосипед</span></button>
          <button className={`${styles.trials_btn} ${isClicked === 'tre'? styles.clicked : ''}`} onClick={() => setIsClicked('tre')}><span>Тренеры</span></button>
        </div>
       </>
    );
}

export default ChatNavBar;