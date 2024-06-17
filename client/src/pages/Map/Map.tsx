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
	Play
} from 'lucide-react'
import RouteModal from './modals/RouteModal'
import PulseSensorModal from './modals/PulseSensorModal'
import KindOfSportModal from './modals/KindOfSportModal'
import { useNavigate } from'react-router-dom'
import styles from './css/Map.module.css'

mapboxgl.accessToken =
	'pk.eyJ1Ijoia29zdGEyMjIiLCJhIjoiY2xzYm8zdzBwMDRqdDJpbzFqYndreTR4dSJ9.9z2G7foqI3ENFW83Hcdj4A'

export default function Map(): JSX.Element {
	const[isRouteModalOpen, setIsRouteModalOpen] = useState(false)
	const[isPulseModalOpen, setIsPulseModalOpen] = useState(false)
	const[isSportModalOpen, setIsSportModalOpen] = useState(false)
	const handleOpenRouteModal = () => {
		setIsRouteModalOpen(true);
	  };
	  const handleCloseRouteModal = () => {
		setIsRouteModalOpen(false);
	  }
	  const handleOpenPulseModal = () => {
		setIsPulseModalOpen(true);
	  };
	  const handleClosePulseModal = () => {
		setIsPulseModalOpen(false);
	  }
	  const handleOpenSportModal = () => {
		setIsSportModalOpen(true);
	  };
	  const handleCloseSportModal = () => {
		setIsSportModalOpen(false);
	  }


	const navigate = useNavigate()

	const handleRedirectMapSettings = () => {
        navigate('/map-settings')
	}
	const handleRedirectNews = () => {
        navigate('/news')
	}
	const handleRedirectTimer = () => {
        navigate('/timer')
	}

	const mapContainer = useRef<HTMLDivElement>(null)
	const map = useRef<mapboxgl.Map | null>(null)
	const marker = useRef<mapboxgl.Marker | null>(null)
	const [lng, setLng] = useState<number>(0)
	const [lat, setLat] = useState<number>(0)
	const [zoom, setZoom] = useState<number>(10)

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

	
		navigator.geolocation.getCurrentPosition((position) => {
			const { longitude, latitude } = position.coords;
			map.current!.setCenter([longitude, latitude]);
			map.current!.setZoom(14); 

			
			marker.current = new mapboxgl.Marker()
				.setLngLat([longitude, latitude])
				.addTo(map.current!);
		}, (error) => {
			console.error('Ошибка при получении геолокации:', error);
		});

	}, [])



	return (
		<div className={styles.map_field}>
			<div className={styles.header}>
				<div className={styles.arrow_btn} onClick={handleRedirectNews}>
					<div className={styles.icon_header}>
						<ArrowLeft color='#000' size={25} />
					</div>
				</div>
				<div className={styles.k_o_s}>
					<span className={styles.kind_of_sport}>Велоспорт</span>
				</div>
				<div className={styles.settings_icon} onClick={handleRedirectMapSettings}>
					<span><Settings color='#000' size={25} /></span>
				</div>
			</div>

			<div ref={mapContainer} className={styles.map_container} />

			<div className={styles.footer}>
				<div className={styles.btn_group}>
					<span onClick={handleOpenRouteModal}>
						<Route strokeWidth={1.5} color='#778c96' size={48} />
					</span>
					<span onClick={handleOpenSportModal}>
						<Bike strokeWidth={1.5} color='#ff0606' size={48} />
					</span>
					<span onClick={handleOpenPulseModal}>
						<HeartPulse strokeWidth={1.5} color='#778c96' size={48} />
					</span>
					<span>
						<Music4 strokeWidth={1.5} color='#778c96' size={48} />
					</span>
				</div>
				<div className={styles.container_red_round_button} onClick={handleRedirectTimer}>
					<div className={styles.red_round_button}><Play size={38}/></div>
				</div>
			</div>
			<RouteModal isRouteOpen={isRouteModalOpen} onRouteClose={handleCloseRouteModal}/>
			<PulseSensorModal isPulseOpen={isPulseModalOpen} onPulseClose={handleClosePulseModal}/>
			<KindOfSportModal isSportOpen={isSportModalOpen} onSportClose={handleCloseSportModal}/>
		</div>
	)
}
