import L from 'leaflet';

const placeMarker = new L.Icon({
  iconUrl: require('./marker-icons/marker-common.svg'),
  iconSize: [20.1, 30.8],
  iconAnchor: [10, 30],
  popupAnchor: [0, -10],
});

export default placeMarker;
