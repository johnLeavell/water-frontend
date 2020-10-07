import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import Login from './components/Login';
import ListResults from './components/ListResults';


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
              <Switch>
                <Route exact path='/' />
                <Route path="/login" component={Login} />
                <Route path='/list-results' component={ListResults}/>
              </Switch>
        </div>
      </Router>
      </>
    );
  }
}

export default App;
