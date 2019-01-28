/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './leaflet.css';
import idGenerator from 'react-id-generator';
 
let LeafletMap, TileLayer, Marker, Popup

class Map extends React.Component {
  componentDidMount(){
    LeafletMap = require('react-leaflet').Map;
    TileLayer = require('react-leaflet').TileLayer;
    Marker = require('react-leaflet').Marker;
    Popup = require('react-leaflet').Popup;
    this.forceUpdate()
  }
  render() {
    if (LeafletMap && TileLayer && Marker && Popup){
      const Places = this.props.work.filter(place => place.width && place.length);
          const Markers = Places.map(places => <Marker key={idGenerator()} position={[places.width, places.length]}>
                                                  <Popup>
                                                    {places.title}
                                                  </Popup>
                                                </Marker>);
          return (
            <LeafletMap
              center={[Places[0].width, Places[0].length]}
              zoom={6}
              maxZoom={15}
              attributionControl
              zoomControl
              doubleClickZoom
              scrollWheelZoom
              dragging
              animate
              easeLinearity={0.35}
            >
              <TileLayer
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              />
              {Markers}
            </LeafletMap>
          );
    } else return (null);  
  }
}

export default Map;
