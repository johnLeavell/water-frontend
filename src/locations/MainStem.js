import React, { Component } from 'react'
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
              { x: 165, y: 375 },
              { x: 359, y: 449 },
              { x: 580, y: 590 },
              { x: 681, y: 629 },
              { x: 756, y: 636 },
              { x: 855, y: 825 },
              { x: 940, y: 918 },
              { x: 165, y: 375 },
              { x: 359, y: 449 },
              { x: 580, y: 590 },
              { x: 681, y: 629 },
              { x: 756, y: 636 },
            ]
          }
        ]
      };

export default class MainStem extends Component {
   
    state = {
        locationWeather: [],
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
                    <Line data={data} />
                </Container>
            </div>
        )
    }
}
