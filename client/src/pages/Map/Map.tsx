import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl, { Map as MapboxMap } from 'mapbox-gl';
import { Settings, Route, Bike, HeartPulse, Music4 } from 'lucide-react';
import styles from './css/Map.module.css';


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
      <div className={styles.header}>
          <div className={styles.c_btn}>
            <button className={styles.close_btn}>Закрыть</button>
          </div>
          <div className={styles.k_o_s}>
            <span className={styles.kind_of_sport}>Велоспорт</span>
          </div>
          <div className={styles.settings_icon}>
            <Settings color="#ff0606" size={23} />
          </div>
      </div>

       <div ref={mapContainer} className={styles.map_container} />

       <div className={styles.footer}> 
         <div className={styles.btn_group}>
           <span><Route size={48} /></span>
           <span><Bike color="#ff0606" size={48} /></span>
           <span><HeartPulse size={48} /></span>
           <span><Music4 size={48} /></span>
         </div>
         <div className={styles.container_red_round_button}>
           <button className={styles.red_round_button}>СТАРТ</button>
         </div>
       </div>
    </div>
  )
}

