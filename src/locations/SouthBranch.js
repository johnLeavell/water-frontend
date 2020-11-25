import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ListResults from '../components/ListResults'
// import { Line } from 'react-chartjs-2';
import SouthBranchWeather from './SouthBranchWeather';
import weatherApiKey from '../apiKeys';
import LineChart from '../components/LineChart'


const WEATHERAPI = `http://api.openweathermap.org/data/2.5/weather?lat=41.88858&lon=-87.624238&units=imperial&appid=${weatherApiKey.openWeatherApiKey}`;
// const lat = 41.888580;
// const long = -87.624238;



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

    render() {
        // console.log(this.state.chartData.labels)
        return (
            <div>
                <Container>
                <LineChart  />
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
                    <ListResults/>
            </Container>
            </div>
        )
    }
}
