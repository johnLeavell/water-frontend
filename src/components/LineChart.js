import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const RESULTS = `http://localhost:3000/results`

export default class LineChart extends Component {
    
    state = {
            chartData: {}
    }

    componentDidMount(){
        this.getChartData();
    }

    getChartData(){
        fetch(RESULTS)
        .then(res => res.json())
        .then(waterData => {
            console.log(waterData);
            let coin = waterData;

            let labels = [];
            let tryp = [];
            let coliform = [];
            let date = [];
            let stage = [];
            let trub = [];
            let time = [];

            coin.forEach(element => {
                labels.push(element.tryp_ppb);
                tryp.push(element.tryp_ppb);
                coliform.push(element.coil_coll_100ml);
                date.push(element.date);
                stage.push(element.stage);
                trub.push(element.trub);
                time.push(element.time)
            });
            this.setState({
                chartData: {
                    labels: date,
                    datasets: [
                        {
                            label: 'Tryptophan',
                            data: tryp,
                        }
                    ]
                }
            })
        })
    }

    render() {
        
        return (
            <div>
                <Line 
                    data={this.state.chartData}
                    options={{
                        title: {
                            display:true,
                            text: 'Water Quality Averages',
                            fontSize: 20
                        },
                        legend:{
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        )
    }
}


