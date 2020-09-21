import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import NavDrawer from './components/NavDrawer';
import Dashboard from './components/dashboard/Dashboard';
import ListResults from './components/ListResults';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      reports: [],
    }
  }
  componentDidMount(){
    this.fetchResults();
  };

  fetchResults(){
    fetch('http://localhost:3000/results')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
      reports: data
      })
    })
  };

  render(){
    return (
      <>
      <NavDrawer />
      <ListResults />
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
                <Route exact path='/' component={Dashboard} />
                <Route path="/login" component={Login} />
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
