import React, { Component } from 'react';

export default class Dashboard extends Component {
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
    .then(data => this.setState({reports: data}));
  };

  render() {

    return (
      <div>

      </div>
    )
  }
}
