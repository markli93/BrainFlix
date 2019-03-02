import React, { Component } from 'react';
import './App.scss';
import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom';
import Navbar from './Navbar.js';
import Mainvideo from './Mainvideo';
import Uploadvideo from './Uploadvideo';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
            <Switch>
              <Route path='/upload' render={props=>(<Uploadvideo {...props}/>)}/>
              <Route path='/:id' exact render={props=>(<Mainvideo {...props}/>)}/>
              <Redirect to={'/1af0jruup5gu'}></Redirect>
            </Switch>
         
        </div>
         </Router>
    );
  }
}

export default App;
