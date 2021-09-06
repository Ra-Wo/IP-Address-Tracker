import React, {Component} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import {Icon} from 'leaflet';
import '../css/Map.css';

export default class MapContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         MarkerIcon : new Icon({
            iconUrl:'/IP-Address-Tracker/images/icon-location.svg',
            iconSize:[25,30]
         })
      }
   }
   render(){
      return (
         <Map center={[this.props.coordinates.lat, this.props.coordinates.lng]} zoom={this.props.zoom} scrollWheelZoom={false} zoomControl={false} className='Map'>
            <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
            <Marker position={[this.props.coordinates.lat, this.props.coordinates.lng]} icon={this.state.MarkerIcon}>
               <Popup>
                  {this.props.isp}
               </Popup>
            </Marker>
         </Map>
      );
   }
}