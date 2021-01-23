import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SouthBranchWeather from './SouthBranchWeather';
import weatherApiKey from '../apiKeys';
import LineChart from '../components/LineChart'

const WEATHERAPI = `http://api.openweathermap.org/data/2.5/weather?lat=41.88858&lon=-87.624238&units=imperial&appid=${weatherApiKey.openWeatherApiKey}`;

export default class SouthBranch extends Component {
    
    state = {
        locationWeather: [],
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
                    {/* <ListResults/> */}
            </Container>
            </div>
        )
    }
}
