import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default class NorthBranch extends Component {
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
