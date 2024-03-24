import React, { useRef, useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl, { Map as MapboxMap } from 'mapbox-gl'
import {
	Settings,
	Route,
	Bike,
	HeartPulse,
	Music4,
	ArrowLeft,
} from 'lucide-react'
import styles from './css/Map.module.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import KindOfSportModal from './modals/KindOfSportModal'
import RouteModal from './modals/RouteModal'
import PulseSensorModal from './modals/PulseSensorModal'
import StopwatchModal from './modals/StopwatchModal'

mapboxgl.accessToken =
	'pk.eyJ1Ijoia29zdGEyMjIiLCJhIjoiY2xzYm8zdzBwMDRqdDJpbzFqYndreTR4dSJ9.9z2G7foqI3ENFW83Hcdj4A'

export default function Map(): JSX.Element {
	const [modalKind, setModalKind] = useState(false)
	const [modalRoute, setModalRoute] = useState(false)
	const [modalPulse, setModalPulse] = useState(false)
  const [modalStop, setModalStop] = useState(false)

	const handleModalKind = () => {
		setModalKind(!modalKind)
	}
	const handleModalRoute = () => {
		setModalRoute(!modalRoute)
	}
	const handleModalPulse = () => {
		setModalPulse(!modalPulse)
	}
  const handleModalStop = () => {
		setModalStop(!modalStop)
	}

	const mapContainer = useRef<HTMLDivElement>(null)
	const map = useRef<mapboxgl.Map | null>(null)
	const [lng, setLng] = useState<number>(30.40)
	const [lat, setLat] = useState<number>(59.9)
	const [zoom, setZoom] = useState<number>(11)

	useEffect(() => {
		if (map.current) return
		map.current = new mapboxgl.Map({
			container: mapContainer.current!,
			style: 'mapbox://styles/mapbox/standard',
			center: [lng, lat],
			zoom: zoom,
		})

		map.current.on('move', () => {
			setLng(map.current!.getCenter().lng)
			setLat(map.current!.getCenter().lat)
			setZoom(map.current!.getZoom())
		})
	}, [lng, lat, zoom])

	return (
		<div className={styles.map_field}>
			<div className={styles.header}>
				<div className={styles.arrow_btn}>
					<ArrowLeft color='#ff0606' size={25} />
				</div>
				<div className={styles.k_o_s}>
					<span className={styles.kind_of_sport}>Велоспорт</span>
				</div>
				<div className={styles.settings_icon}>
					<Settings color='#ff0606' size={25} />
				</div>
			</div>

			<div ref={mapContainer} className={styles.map_container} />

			<div className={styles.footer}>
				<div className={styles.btn_group}>
					<span onClick={handleModalRoute}>
						<Route strokeWidth={1.5} size={48} />
					</span>
					<span onClick={handleModalKind}>
						<Bike strokeWidth={1.5} color='#ff0606' size={48} />
					</span>
					<span onClick={handleModalPulse}>
						<HeartPulse strokeWidth={1.5} size={48} />
					</span>
					<span>
						<Music4 strokeWidth={1.5} size={48} />
					</span>
				</div>
				<div className={styles.container_red_round_button} onClick={handleModalStop}>
					<button className={styles.red_round_button}>СТАРТ</button>
				</div>
			</div>
			<KindOfSportModal
				modalKind={modalKind}
				handleModalKind={handleModalKind}
			/>
			<RouteModal modalRoute={modalRoute} handleModalRoute={handleModalRoute} />
			<PulseSensorModal
				modalPulse={modalPulse}
				handleModalPulse={handleModalPulse}
			/>
      <StopwatchModal modalStop={modalStop}
				handleModalStop={handleModalStop}/>
		</div>
	)
}
