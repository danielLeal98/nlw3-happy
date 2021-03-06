import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg';
import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>
        <footer>
          <strong>Belford Roxo</strong>
          <span>Rio de Janeiro</span>
        </footer>
      </aside>
      <Map center={[-22.7656734, -43.3970179]} zoom={15} style={{ width: '100%', height: '100%' }}>
        {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
