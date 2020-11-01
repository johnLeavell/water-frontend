import React from 'react';
import Container from '@material-ui/core/Container';
let moment = require('moment');

const SouthBranchDay = ({reading}) => {
    let newDate = new Date();
    const weekday = reading.dt * 1000
    newDate.setTime(weekday)

    const imgURL = `owf owf-${reading.weather[0].id} owf-3x`

    return (
        <Container>
            <h4>{moment(newDate).format('ddd')} {moment(newDate).format('MMMM Do')}</h4>
            <i className={imgURL}></i> {reading.weather[0].description}
            <h4>Average Temp {Math.round(reading.main.temp)} °F</h4>
            <p></p>
        </Container>
    )
}

export default SouthBranchDay;