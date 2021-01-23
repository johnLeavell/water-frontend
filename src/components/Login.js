import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Login extends Component {
  
  state = {
    username: '',
    password: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.handleUserLogin(this.state)
    this.setState({
      username: '',
      password: '',
    })
    this.props.history.push('/dashboard')
  }

  render(){
    return (
      <Container component="main" maxWidth="xs">
        <div>
          <form onSubmit={this.handleSubmit} >
            <TextField
              onChange={this.handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={this.handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default Login;