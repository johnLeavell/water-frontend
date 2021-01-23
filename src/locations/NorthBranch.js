import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// import { Line } from 'react-chartjs-2';

class NorthBranch extends Component {
    
    state = {
        barChartData: []
    }

    render() {
        return (
            <div>
                <Container>
                    <Typography variant="h3" gutterBottom>
                        North Branch
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        North Branch Data
                    </Typography>
                </Container>
            </div>
        )
    }
}

export default NorthBranch;