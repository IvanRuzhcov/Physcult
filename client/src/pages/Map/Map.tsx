import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl, { Map as MapboxMap } from 'mapbox-gl';
import styles from './css/Map.module.css';
import Stopwatch from './components/Stopwatch';
import NavBar from '../Navbar/NavBar';


mapboxgl.accessToken = 'pk.eyJ1Ijoia29zdGEyMjIiLCJhIjoiY2xzYm8zdzBwMDRqdDJpbzFqYndreTR4dSJ9.9z2G7foqI3ENFW83Hcdj4A';

export default function Map():JSX.Element { 

    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    
    const [lng, setLng] = useState<number>(30.25);
    const [lat, setLat] = useState<number>(59.9);
    const [zoom, setZoom] = useState<number>(6);

    
    useEffect(() => {
        if (map.current) return; 
        map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
         
        map.current.on('move', () => {
            setLng(map.current!.getCenter().lng);
            setLat(map.current!.getCenter().lat);
            setZoom(map.current!.getZoom());
        });
    }, [lng, lat, zoom]);


  return (
    <div className={styles.map_field}>
       <div className={styles.sidebar}>
         Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
       </div>
       <div ref={mapContainer} className={styles.map_container} />
       <div className={styles.footer}>
         <Stopwatch/>
       </div>
       <NavBar/>
    </div>
  )
}
