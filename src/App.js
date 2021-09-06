import React from 'react'
import axios from 'axios';
import api from './api.js';
import './App.css';
import Header from './Components/Header.js';
import MapContainer from './Components/Map.js';
import CardInfo from './Components/CardInfo.js';


export default class App extends React.Component {
   
   constructor (props) {
      super(props)
      
      this.state = ({
         ipaddress:'',
         ip: '',
         isp: '',
         location: '',
         coordinates: {
            lat: 0,
            lng: 0
         },
         timezone: '',
         zoom: 1
      }) 
      this.api = this.api.bind(this)
      this.getIpAddress = this.getIpAddress.bind(this)
   }
   
   componentDidMount() {
      this.api()
   }

   api () {
      
      return (
         axios.get(`https://geo.ipify.org/api/v1?apiKey=${api.api_key}&ipAddress=${this.state.ip}`)
         .then( response => {
            this.setState({
               ipaddress: response.data.ip,
               ip: response.data.ip,
               isp: response.data.isp,
               location: `${response.data.location.country}, ${response.data.location.city}`,
               coordinates: {
                  lat: response.data.location.lat,
                  lng: response.data.location.lng,
               },
               timezone: response.data.location.timezone,
               zoom: 14
            });
         })
         .catch( error => {
            document.querySelector('.alert').style.opacity = 1;
            setTimeout(() => {
               document.querySelector('.alert').style.opacity = 0;
            }, 4000);
         })
      );
   }
   getIpAddress (){
      this.setState({
         ip: document.querySelector('.inputIp').value
      })
   }

   render () {
      return (
         <div className="App">
         
            <Header
               ip={this.state.ip}
               getIpAddress={this.getIpAddress}
               api={this.api}
            />
            <CardInfo 
               ipaddress={this.state.ipaddress}
               location={this.state.location}
               timezone={this.state.timezone}
               isp={this.state.isp}
            />
            <MapContainer
               coordinates={this.state.coordinates}
               zoom={this.state.zoom}
               isp={this.state.isp}
            />
            
            <div className='alert'>
               there's no information about this IP address !
            </div>
            
         </div>
      );
   }
}
