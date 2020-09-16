import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import NavDrawer from './components/NavDrawer'


class App extends Component {
  render(){
    return (
      <>
      <NavDrawer />
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                </ul>
              </div>
            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/log-in" component={Login} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
      </>
    );
  }
}

export default App;
