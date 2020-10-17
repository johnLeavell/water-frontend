import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";


import Login from './components/Login';
import ListResults from './components/ListResults';
import About from './components/About';
import Home from './components/Home';
import AppDrawer from './components/AppDrawer';
import NorthBranch from './locations/NorthBranch';
import SouthBranch from './locations/SouthBranch'
import MainStem from './locations/MainStem'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <>
      <Router>
        <div>
        <AppDrawer/>

              <Switch>
              <Route exact path='/' render={ (props) => <Home {...props} /> } />
                <Route path="/login" component={Login} />
                <Route path='/list-results' render={ (props) => <ListResults {...props} /> }/>
                <Route path='/about' render={ (props) => <About {...props} /> }/>
                <Route exact path='/northbranch' render={ (props) => <NorthBranch {...props} /> }/>
                <Route exact path='/southbranch' render={ (props) => <SouthBranch {...props} /> }/>
                <Route exact path='/mainstem' render={ (props) => <MainStem {...props} /> }/>
              </Switch>
        </div>
      </Router>
      </>
    );
  }
}

export default App;
