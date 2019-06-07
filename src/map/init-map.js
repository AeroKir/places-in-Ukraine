import L from 'leaflet';
import placeMarker from './place-marker';
import places from '../data/places-z.json';

import '../leaflet.css';

const openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18,
});

const map = L.map('map', {
  layers: [openStreetMap],
});

map.setView([48.15, 24.82], 11);

places.forEach((place) => {
  const nameOfPlace = place.name;
  const nameOfPlaceUa = place.nameUa;
  const nameOfPlaceRu = place.nameRu;
  const position = new L.LatLng(place.coord.lat, place.coord.lon);
  Array.from(position);
  console.log(position);

  const preview = new L.Marker(position, { icon: placeMarker }).addTo(map);
  preview.bindPopup(`<h3>EN: ${nameOfPlace}</h3>
                     <h3>UA: ${nameOfPlaceUa}</h3>
                     <h3>RU: ${nameOfPlaceRu}</h3>`);
});

export default map;
