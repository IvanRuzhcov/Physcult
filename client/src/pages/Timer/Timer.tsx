import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Square, Play, ArrowLeft } from 'lucide-react';
import styles from './css/Timer.module.css'

export default function Timer(): JSX.Element{
	const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
	const navigate = useNavigate();

	useEffect(() => {
        let timerId: NodeJS.Timeout;
        if (isRunning) {
            timerId = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => clearInterval(timerId);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

	const handleRedirectMap = () => {
		navigate('/map');
    };

	const formatTime = (time: number): string => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        const formattedTime = [hours, minutes, seconds]
            .map((unit) => String(unit).padStart(2, '0'))
            .join(':');

        return formattedTime;
    };

  return (
	<div className={styles.timer_block}>
		<div className={styles.timer_header} onClick={handleRedirectMap}>
			<span><ArrowLeft color='#ff0606' size={25} /></span>
		</div>
		<div className={styles.timer_content}>
			<div className={styles.time_block}>
				<span className={styles.header}>ВРЕМЯ</span>
				<span className={styles.time_content}>{formatTime(time)}</span>
			</div>

			<div className={styles.divider}></div>

			<div className={styles.speed_block}>
				<span className={styles.header}>СРЕДНЯЯ СКОРОСТЬ</span>
				<span className={styles.speed_content}>00,0</span>
				<span className={styles.header}>КМ/Ч</span>
			</div>

			<div className={styles.divider}></div>

			<div className={styles.distance_block}>
				<span className={styles.header}>РАССТОЯНИЕ</span>
				<span className={styles.distance_content}>0,00</span>
				<span className={styles.header}>КМ</span>
			</div>

			<div className={styles.divider}></div>

			<div className={styles.footer}>
				<div className={styles.btn_group}>
				{isRunning ? (
                                <div className={styles.stop_button} onClick={handleStop}>
                                    <Square size={38}/>
                                </div>
                            ) : (
                                <div className={styles.start_button} onClick={handleStart}>
                                    <Play size={38}/>
                                </div>
                            )}
				</div>
			</div>
		</div>
	</div>
  )
}
