import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const RESULTS = `http://localhost:3000/results`



export default class LineChart extends Component {
    constructor(){
        super()
        this.state = {
            chartData: {}
        }
    }

    componentDidMount(){
        this.getChartData();
        // this.getAyyakadata();
    }

    // getAyyakadata() {
    //     var RestapiService = require('restapi_service');
    //     var defaultClient = RestapiService.ApiClient.instance;
        
    //     // Configure API key authorization: jwt_header_Authorization
    //     var jwt_header_Authorization = defaultClient.authentications['jwt_header_Authorization'];
    //     jwt_header_Authorization.apiKey = "0E9574538CE2453E8308D8DAACBD9890"
    //     // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //     //jwt_header_Authorization.apiKeyPrefix['Authorization'] = "Token"
        
    //     var api = new RestapiService.DeviceApi()
        
    //     var authorization = authorization_example; // {String} JWT used for authentication
        
        
    //     var callback = function(error, data, response) {
    //       if (error) {
    //         console.error(error);
    //       } else {
    //         console.log('API called successfully. Returned data: ' + data);
    //       }
    //     };
    //     api.deviceGetAllDevices(authorization, callback);
        
    //     console.log(this.getAyyakadata)

    // }
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
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septenber', 'October', 'November', 'December'],
                    datasets: [
                        {
                            label: 'Water Quality',
                            data: tryp,
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.6)",
                                "rgba(54, 162, 235, 0.6)",
                                "rgba(255, 99, 132, 0.6)"
              
                            ],
                        }
                    ]
                }
            })
            // console.log(time);
            // let tryp = coin.forEach(ele =>{
            //     data.push(ele.tryp)
            // } )

            // let coliform = []
            // coin.forEach(ele => {
            //     coliform.push(ele.coil_coll_100ml)
            // })
            // console.log(tryp);
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
                <h4>line Chart</h4>
            </div>
        )
    }
}


// cable_power: "4.72"
// coil_coll_100ml: "1020.06"
// date: "08/12/20"
// id: 1
// stage: "9.93"
// temp: "22.39"
// time: "09:32:23"
// trub: "8.94"
// tryp_ppb: "20.88"
// tryp_temp_corr: "23.03"

 // componentDidMount = () => {
    //     let tryp = [];
    //     let coliform = [];

    //     fetch(RESULTS)
    //     .then(resp => resp.json())
    //     .then(data => { 
    //         let results = Object.keys(data[1]).forEach((item) => {
    //             let x = item;
                
    //             console.log(x)
    //             tryp.push(item)

    //             // }
    //         });
    //         let coliformResults = Object.values(data).forEach((item) => {
    //             let y = item;

    //             console.log(y)
    //         })

    //         // const results = data;
    //         // let tryp = [];
    //         // let coliform = [];
    //         // results.forEach(element => {
    //         //     tryp.push(element.tryp_ppb);
    //         //     coliform.push(element.coli_coll_100ml)
    //         // });
    //         this.setState({
    //             data: {
    //                 labels: tryp,
    //                 backgroundColor:[
    //                     'rgba(255,105,145,0.6)',
    //                     'rgba(155,100,210,0.6)',
    //                     'rgba(90,178,255,0.6)',
    //                     'rgba(240,134,67,0.6)',
    //                     'rgba(120,120,120,0.6)',
    //                     'rgba(250,55,197,0.6)'
    //                 ]
    //             }
    //         })
    //     })
    // }





    // const state = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septenber', 'October', 'November', 'December'],
//     datasets: [
//         {
//             label: 'Water Quality',
//             fill: false,
//             lineTension: 0.5,
//             backgroundColor: 'rgba(75,192,192,1)',
//             borderColor: 'rgba(0,0,0,1)',
//             borderWidth: 2,
//             data: fetch(RESULTS)    
//         }
//     ]
// }