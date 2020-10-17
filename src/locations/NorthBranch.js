import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { Line } from 'react-chartjs-2';

const data = {

    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
        {
            label: 'Main Stem Water Quality Data',
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [
              { x: 635, y: 745 },
              { x: 242, y: 858 },
              { x: 840, y: 960 },
              { x: 831, y: 249 },
              { x: 586, y: 326 },
              { x: 575, y: 225 },
              { x: 460, y: 158 },
              { x: 635, y: 745 },
              { x: 242, y: 858 },
              { x: 840, y: 960 },
              { x: 831, y: 249 },
              { x: 586, y: 326 },
            ]
          }
        ]
      };

    

    // const RESULTS = `${API}/results`
    // const lat = 41.888580;
    // const long = -87.624238;

export default class NorthBranch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            locationWeather: [],
        }
    }
    
    // componentDidMount = () => {
    //     this.fetchCurrentWeatherData();    
    // }
    
    // fetchCurrentWeatherData = () => {
    //     fetch(API)
    //     .then( resp => resp.json())
    //     .then( data => {
    //         this.setState({
    //             locationWeather: data
    //         })
    //     console.log(data.main.temp)
    // })
    // }

    render() {
        console.log(this.state.locationWeather.main)
        return (
            <div>
                <Container>
                    <Typography variant="h3" gutterBottom>
                        North Branch
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    North Branch Data
              </Typography>
              <button />
              <button/>
              <button/>
              <Line data={data} />
            </Container>
            </div>
        )
    }
}
