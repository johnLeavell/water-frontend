import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
// import OpacityIcon from '@material-ui/icons/Opacity';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none', 
    color: theme.palette.text.primary
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
}));

export default function AppDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            edge='start'
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            H2Now
          </Typography>
          <div className={classes.toolbarButtons}>
          <Link to='/login' className={classes.link}>
          <IconButton color='inherit'>
            <MeetingRoomIcon/>
          </IconButton>
          </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to='/' className={classes.link} >
            <ListItem button>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary='Home'/>
            </ListItem>
          </Link>
          {/* <Link to='/list-results' className={classes.link} >
            <ListItem button>
              <ListItemIcon>
                <OpacityIcon/>
              </ListItemIcon>
              <ListItemText primary='Sampling Results'/>
            </ListItem>
          </Link> */}
          <Link to='/about' className={classes.link} >
            <ListItem button>
              <ListItemIcon>
                <InfoIcon/>
              </ListItemIcon>
              <ListItemText primary='About'/>
            </ListItem>
          </Link>
        </List>
        <Divider />
        
        <List>
          <Link to='/northbranch' className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <GpsFixedIcon/> 
            </ListItemIcon>
            <ListItemText primary='North Branch' />
        </ListItem>
        </Link>

        <Link to='/southbranch' className={classes.link}>
        <ListItem button>
            <ListItemIcon>
              <GpsFixedIcon/>
            </ListItemIcon>
            <ListItemText primary='South Branch' />
        </ListItem>
        </Link>

        <Link to='/mainstem' className={classes.link}>
        <ListItem button>
            <ListItemIcon>
              <GpsFixedIcon/>
            </ListItemIcon>
            <ListItemText primary='Main Stem' />
        </ListItem>
        </Link>

        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>

        </Typography>
        <Typography paragraph>

        </Typography>
      </main>
    </div>
  );
}


// {['Home', 'Water Quality', 'Login', 'About'].map((text, index) => (
//   <ListItem button key={text}>
//     <ListItemIcon>{index % 2 === 0 ? <CropSquareIcon /> : <CropSquareIcon />}</ListItemIcon>
//     <ListItemText primary={text} />
//   </ListItem>
// ))}