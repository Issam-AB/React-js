import React, { Component } from 'react';
import logo from './logo.svg';
import Contacts from './Component/Contact/Contacts';
import {Provider} from './Component/Context'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 

import Navbar from './Component/Navbar/Navbar';
// import './App.css';


class App extends Component {
  render(){
    return (
      <Provider>
        <div className="App">
          <Navbar/> 
          <Contacts />
       </div>
      </Provider>
      
    );
  }
  
}

export default App;
