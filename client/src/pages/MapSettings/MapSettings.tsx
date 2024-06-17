import React from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { useNavigate } from'react-router-dom'
import styles from './css/MapSettings.module.css'

export default function MapSettings(): JSX.Element {
	const navigate = useNavigate()

	const handleRedirectMap = () => {
        navigate('/map')
	}
	return (
		<div className={styles.map_settings_container}>
			<div className={styles.map_settings_header}>
				<div className={styles.icon_header} onClick={handleRedirectMap}>
					<ChevronLeft size={24} />
				</div>
				<span className={styles.map_settings_header_title}>Настройки</span>
			</div>
			<div className={styles.map_settings_content}>
				<div className={styles.map_settings_section}>
					<div className={styles.map_settings_text_group}>
						<span className={styles.map_settings_section_title}>
							Настройка экрана
						</span>
						<span className={styles.map_settings_section_text}>Системный</span>
					</div>
					<div className={styles.chevron}>
						<ChevronRight size={18} />
					</div>
				</div>
				<div className={styles.map_settings_section}>
					<div className={styles.map_settings_text_group}>
						<span className={styles.map_settings_section_title}>
							Добавить вручную
						</span>
						<span className={styles.map_settings_section_text}>
							Настрой тренировку
						</span>
					</div>
					<div className={styles.chevron}>
						<ChevronRight size={18} />
					</div>
				</div>
				<div className={styles.map_settings_section}>
					<div className={styles.map_settings_text_group}>
						<span className={styles.map_settings_section_title}>
							Датчик пульса
						</span>
						<span className={styles.map_settings_section_text}>
							Добавь GPS устройство
						</span>
					</div>
					<div className={styles.chevron}>
						<ChevronRight size={18} />
					</div>
				</div>
				<div className={styles.map_settings_section}>
					<div className={styles.map_settings_text_group}>
						<span className={styles.map_settings_section_title}>Автопауза</span>
						<span className={styles.map_settings_section_text}>Включено</span>
					</div>
					<div className={styles.chevron}>
						<ChevronRight size={18} />
					</div>
				</div>
			</div>
		</div>
	)
}
