import React from 'react';
// import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
let moment = require('moment');

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const SouthBranchDay = ({reading}) => {
    let newDate = new Date();
    const weekday = reading.dt * 1000
    newDate.setTime(weekday)

    const imgURL = `owf owf-${reading.weather[0].id} owf-`

    const classes = useStyles();

    return (
        <>
        
        <div className={classes.root}>
      <Grid 
        container 
        spacing={3}
        // direction="row"
        // align-items='start'
        >
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          {/* <Container> */}
            <h4>{moment(newDate).format('ddd')} {moment(newDate).format('MMMM Do')}</h4>
            <i className={imgURL}></i> {reading.weather[0].description}
            <h4>Temp {Math.round(reading.main.temp)} °F</h4>
            <h4>Feels like {Math.round(reading.main.feels_like)}</h4>
            <h4>Wind Speed {Math.round(reading.wind.speed)}mph</h4>
        {/* </Container> */}
        </Paper>
        </Grid>

      </Grid>
    </div>
        </>
    )
}

export default SouthBranchDay;