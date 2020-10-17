import React, { Component } from 'react';
import weatherApi from '../apiKeys';
import SouthBranchDay from './SouthBranchDay';

export default class SouthBranchWeather extends Component {
    state = {
        fullData: [],
        dailyData: [],
    }

    componentDidMount = () => {
        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=60608&lat=41.88858&lon=-87.624238&units=imperial&appid=${weatherApi.openWeatherApiKey}`;

        fetch(weatherURL)
        .then(res => res.json())
        .then(data => {
            const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
            this.setState({
              fullData: data.list,
              dailyData: dailyData
            }, () => console.log(this.state))
          })
        .catch(err => console.log('Yo, that shit aint working', err))
    }

    getDayCards = () => {
        return this.state.dailyData.map((reading, index) => <SouthBranchDay reading={reading} key={index} />)
    }


    render() {
        return (
            <div>
                {this.getDayCards()}
            </div>
        )
    }
}
