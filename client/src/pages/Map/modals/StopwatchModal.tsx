import React from 'react'
import styles from './css/StopwatchModal.module.css'
interface StopwatchModalProps {
	modalStop: boolean
	handleModalStop: () => void
}

export default function StopwatchModal({
	modalStop,
	handleModalStop,
}: StopwatchModalProps): JSX.Element {
	return (
		<div className={modalStop ? styles.modal_activ : styles.modal}>
			<div className={styles.overlay_r} onClick={handleModalStop}>
				<div className={styles.modal_content}>
					<div className={styles.time_block}>
						<span className={styles.header}>ВРЕМЯ</span>
						<span className={styles.time_content}>00:00:01</span>
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

					<div className={styles.footer}>
						<div className={styles.btn_group}>
							<button className={styles.stop_button}>СТОП</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
