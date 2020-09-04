import React, { Component } from 'react';
import './App.css';
// import { Route, Switch } from 'react-router-dom'
import NavDrawer from './components/NavDrawer'


class App extends Component {
  render(){
    return (
      
      <div className="App">
        <NavDrawer />

      </div>
    );
  }
}

export default App;
