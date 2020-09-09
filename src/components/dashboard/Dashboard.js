import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';

const xlabels = [];   
const data = {
  labels: xlabels,
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
};
export default class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      reports: [],
      displayName: 'DoughnutExample'
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
        <Radar data={data}
        />
      </div>
    )
  }
}
