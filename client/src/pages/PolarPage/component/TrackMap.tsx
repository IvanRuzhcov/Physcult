import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import toGeoJSON from 'togeojson';
import style from '../css/Polar.module.css'

/**
 * @typedef {Object} GeoJSON
 * @property {string} type
 * @property {Object} features
 */

/**
 * Convert GPX data to GeoJSON format.
 * @param {string} gpxData - The GPX data in string format.
 * @returns {GeoJSON} - The converted GeoJSON object.
 */
const convertGpxToGeoJSON = (gpxData: string) => {
  const gpxDom = new DOMParser().parseFromString(gpxData, 'text/xml');
  return toGeoJSON.gpx(gpxDom);
};

const TrackMap = ({ gpxData , mapId }:{gpxData:string , mapId:string}) => {
  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoia29zdGEyMjIiLCJhIjoiY2xzYm8zdzBwMDRqdDJpbzFqYndreTR4dSJ9.9z2G7foqI3ENFW83Hcdj4A';

    const map = new mapboxgl.Map({
      container:mapId,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [30.32676, 59.93714167],
      zoom: 15,
    });

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: { line_string: true },
    });
    map.addControl(draw);

    const geojson = convertGpxToGeoJSON(gpxData);

    map.on('load', () => {
        map.addSource('route', {
          type: 'geojson',
          data: geojson,
        });
      
        const bounds = new mapboxgl.LngLatBounds();
        
        // Добавим проверку наличия geometry
        if (geojson.features && geojson.features.length > 0 && geojson.features[0].geometry) {
          geojson.features[0].geometry.coordinates.forEach((coord: number[]) => {
            bounds.extend([coord[0], coord[1]]);
          });
        
          map.fitBounds(bounds, { padding: 50 });
        
          map.addLayer({
            id: 'route',
            type: 'line',
            source: 'route',
            layout: {
              'line-join': 'round',
              'line-cap': 'round',
            },
            paint: {
              'line-color': '#fc7432',
              'line-width': 4,
            },
          });

        }
      });
      

    return () => {
      map.remove();
    };
  }, [gpxData, mapId]);

  return (
    <>
      <div id={mapId} className={style.map}/>
    </>
  );
};

export default TrackMap;
