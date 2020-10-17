import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ListResults from '../components/ListResults'
import { Line } from 'react-chartjs-2';
import SouthBranchWeather from './SouthBranchWeather';
import weatherApiKey from '../apiKeys'

const WEATHERAPI = `http://api.openweathermap.org/data/2.5/weather?lat=41.88858&lon=-87.624238&units=imperial&appid=${weatherApiKey.openWeatherApiKey}`;
// const lat = 41.888580;
// const long = -87.624238;

const RESULTS = `http://localhost:3000/results`


const fetchData = () => {
    fetch(RESULTS)
    .then(res => res.json())
    .then(data => console.log(data))

}

const chartData = {
    // x axis
    
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
              { x: 335, y: 145 },
              { x: 942, y: 158 },
              { x: 440, y: 260 },
              { x: 431, y: 949 },
              { x: 986, y: 826 },
              { x: 275, y: 925 },
              { x: 860, y: 958 },
              { x: 635, y: 445 },
              { x: 842, y: 258 },
              { x: 240, y: 160 },
              { x: 231, y: 949 },
              { x: 886, y: 726 },
            ]
          }
        ]
    };

export default class SouthBranch extends Component {
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
        fetch(WEATHERAPI)
        .then( resp => resp.json())
        .then( data => {
            this.setState({
                locationWeather: data
            })
        })
    }

    renderLocationData = () => {
        const { temp } = this.state.locationWeather
        // console.log(temp);
    }

    render() {
        // console.log(this.state.locationWeather)
        return (
            <div>
                <Container>
                    <Typography variant="h3" gutterBottom>
                        South Branch
                    </Typography>
                    <Typography>
                        5 day weather outlook
                    </Typography>
                    <br/>
                    <SouthBranchWeather />
                    <br/>
                    <Typography variant="body1" gutterBottom>
                    South Branch Data
                    </Typography>
                    <button />
                    <button/>
                    <button/>
                    <Line data={chartData} />
                    <br/>
                    {this.renderLocationData()}
                    <ListResults/>
            </Container>
            </div>
        )
    }
}

// {
//     this.setState({
//         locationWeather: data
//     })
// }