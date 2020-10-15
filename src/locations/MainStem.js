import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MainStemWeatherReport from './MainStemWeatherReport';

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
              { x: 65, y: 75 },
              { x: 59, y: 49 },
              { x: 80, y: 90 },
              { x: 81, y: 29 },
              { x: 56, y: 36 },
              { x: 55, y: 25 },
              { x: 40, y: 18 },
            ]
          }
        ]
      };

    
    const API = `http://api.openweathermap.org/data/2.5/weather?lat=41.88858&lon=-87.624238&units=imperial&appid=b0efb34e8a9377dc5eaaff3184b94e0a`;
    // const RESULTS = `${API}/results`
    // const lat = 41.888580;
    // const long = -87.624238;

export default class MainStem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            locationWeather: [],
        }
    }
    
    componentDidMount = () => {
        this.fetchCurrentWeatherData();    
    }
    
    fetchCurrentWeatherData = () => {
        fetch(API)
        .then( resp => resp.json())
        .then( data => {
            this.setState({
                locationWeather: data
            })
        console.log(data.main.temp)
    })
    }


    
    render() {
        console.log(this.state.locationWeather.main)
        return (
            <div>
                <Container>
                    <Typography variant="h3" gutterBottom>
                        Main Stem
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    Main Stem Data
              </Typography>
              <button />
              <button/>
              <button/>
              <Line data={data} />
            </Container>
            <Container>
                <MainStemWeatherReport props={this.state}/>
                
            </Container>
            </div>
        )
    }
}
