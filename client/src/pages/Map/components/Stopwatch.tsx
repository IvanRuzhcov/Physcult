import React, {useState, useEffect} from 'react'
import styles from '../css/Map.module.css';


export default function Stopwatch():JSX.Element {
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [elapsedTime, setElapsedTime] = useState<number>(0);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
    
        if (isRunning) {
          intervalId = setInterval(() => {
            setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
          }, 1000);
        }
    
        return () => {
          clearInterval(intervalId);
        };
      }, [isRunning]);

      const handleStartStop = () => {
        setIsRunning(prevIsRunning => !prevIsRunning);
      };
    
      const handleReset = () => {
        setElapsedTime(0);
        setIsRunning(false);
      };
      
      const formatTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
    
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
      };


  return (
    <>
      <div className={styles.time_conteiner}>
          <span className={styles.time}>Время: {formatTime(elapsedTime)}</span>
          <span className={styles.time}>Ср. скорость: 0:00 км/ч</span>
          <span className={styles.time}>Расстояние: 0:00 км</span>
      </div>
      <div>
         <button className={styles.round_button} onClick={handleStartStop}>{isRunning ? 'Стоп' : 'Старт'}</button>
      </div>
      <div>
        <button className={styles.reset_button} onClick={handleReset}>Сброс</button>
      </div>
    </>
  )
}
