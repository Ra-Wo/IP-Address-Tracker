import React, {Component} from 'react';
import Search from './Search'
import '../css/Header.css';

export default class Header extends Component {
   
   render(){
      return (
         <header style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/pattern-bg.png)`}}>
            <div>IP Address Tracker</div>
            <Search 
               getIpAddress={this.props.getIpAddress}
               api={this.props.api}
            />
         </header>
      )
   }
}