import './style.css'
import { ThreeScene } from './scene'

// Create app container
const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = ''
app.style.width = '100vw'
app.style.height = '100vh'
app.style.overflow = 'hidden'
app.style.margin = '0'
app.style.padding = '0'


import mbxClient from '@mapbox/mapbox-sdk';
import mbxStyles from '@mapbox/mapbox-sdk/services/styles';
import mbxTilesets from '@mapbox/mapbox-sdk/services/tilesets';
import mbxTilequery from '@mapbox/mapbox-sdk/services/tilequery';
import mbxDatasets from '@mapbox/mapbox-sdk/services/datasets';

const baseClient = mbxClient({ accessToken: 'sk.eyJ1IjoidmljdG9yeWZvcnBoaWwiLCJhIjoiY204bGp2OXp5MGl3bDJxcTB5dmZ1YW5vNCJ9.M_E0zul3jzN8b0xMImYK7A' });
const stylesService = mbxStyles(baseClient);
const tilesetsClient = mbxTilesets(baseClient);
const tilequeryClient = mbxTilequery(baseClient);
const datasetsClient = mbxDatasets(baseClient);
//mapbox.mapbox-streets-v8

tilequeryClient.listFeatures({
    mapIds: ['mapbox.mapbox-streets-v8'],
    coordinates: [-122.431297, 37.773972],
    radius: 1000,
    limit: 50
  })
    .send()
    .then(response => {
      const features = response.body;
      console.log(features);
    });
// Initialize Three.js scene
new ThreeScene(app)
