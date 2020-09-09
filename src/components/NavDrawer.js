import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Dashboard from '../components/dashboard/Dashboard';


function NavDrawer() {
  return (
    <div>
      <AppBar position="static">
          <Toolbar>
              <Typography color="inherit">
                Water Quality App
              </Typography>
          </Toolbar>
      </AppBar>
      <Dashboard />
    </div>
  );
}


export default NavDrawer;
