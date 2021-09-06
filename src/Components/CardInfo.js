import React, {Component} from 'react';
import '../css/CardInfo.css';

export default class CardInfo extends Component {
   
   render(){
      return (
         <div className='CardInfo'>
            <div>
            
               <div>
                  <p>IP Address</p>
                  <p>{this.props.ipaddress}</p>
               </div>
               
               <div>
                  <p>location</p>
                  <p>{this.props.location}</p>
               </div>
               
               <div>
                  <p>timezone</p>
                  <p>{this.props.timezone}</p>
               </div>
               
               <div>
                  <p>isp</p>
                  <p>{this.props.isp}</p>
               </div>
            </div>
         </div>
      );
   }
}