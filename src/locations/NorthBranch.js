import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

class NorthBranch extends Component {
    constructor(){
        super();
        this.state = {
            barChartData: []
        }
    }

    componentDidMount(){
        this.change0();
    }

    change0(){
        this.setState({
            barChartData:{
                labels: ['January', 'Feburary', 'March',],
                datasets: [
                    {
                        label: '3 Months',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80] 
                    }
                ]
            }
        })
    }
    render() {
        // console.log(this.state.locationWeather.main)
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
            </Container>
            </div>
        )
    }
}

export default NorthBranch;