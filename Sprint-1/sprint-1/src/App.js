import React, { Component } from 'react';
import './App.scss';
import Navbar from './Navbar.js';
import Mainvideo from './Mainvideo'

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Mainvideo/>
      </div>
    );
  }
}

export default App;
