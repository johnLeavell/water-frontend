import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const API = 'http://localhost:3000/';
const RESULTS = `${API}/results`

class ListResults extends Component {
  
  state = {
    results: [],
  }

  componentDidMount() {
    this.loadResultList();
  }

  loadResultList = () => {
    fetch(RESULTS)
    .then(res => res.json())
    .then(results => {
      this.setState({results: results})
    })
  }

  render() {
    return (
      <div>
        <Container>
          <Typography variant="h4" style={style}>Sampling Results</Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="right">Id</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Time</TableCell>
                  <TableCell align="right">Temp</TableCell>
                  <TableCell align="right">Stage</TableCell>
                  <TableCell align="right">Trub</TableCell>
                  <TableCell align="right">Tryp ppb</TableCell>
                  <TableCell align="right">Tryp Temp Corr</TableCell>
                  <TableCell align="right">Cable Power</TableCell>
                  <TableCell align="right">Coil Coll 100ml</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.results.map(result => (
                  <TableRow key={result.id}>
                    <TableCell component='th' scope='result'>
                    {result.id}
                    </TableCell>
                    <TableCell align='right'>{result.date}</TableCell>
                    <TableCell align='right'>{result.time}</TableCell>
                    <TableCell align='right'>{result.temp}</TableCell>
                    <TableCell align='right'>{result.stage}</TableCell>
                    <TableCell align='right'>{result.trub}</TableCell>
                    <TableCell align='right'>{result.tryp_ppb}</TableCell>
                    <TableCell align='right'>{result.tryp_temp_corr}</TableCell>
                    <TableCell align='right'>{result.cable_power}</TableCell>
                    <TableCell align='right'>{result.coil_coll_100ml}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </Container>
            </div>
        );
    }
}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default ListResults;
