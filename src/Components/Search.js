import React, {Component} from 'react';
import '../css/Search.css';

export default class Search extends Component {
   render(){
      return (
         <div className='search'>
            <input
               placeholder='Search for any IP Address'
               type='text' 
               onChange={this.props.getIpAddress} 
               className='inputIp'
            />
            <button 
               onClick={this.props.api} 
               value='send' 
               type='submit'
            > <img 
                  src='/IP-Address-Tracker/images/icon-arrow.svg'
                  alt='arrow'
               />
            </button>
         </div>
      );
   }
}