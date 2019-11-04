import React, { useContext } from 'react';
import * as Context from '../AppContext';
import Config from '../Config';
import * as Style from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import * as Nav from './Navbar';

const drawerWidth = Config.drawerWidth;
const useStyles = Style.makeStyles(theme => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  }
}));

function AdminNavbar(){
	const { handleDrawerToggle, login } = useContext(Context.AppContext);
	const classes = useStyles();
  
	return (
		<AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.menuButton}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>

        <Nav.NavBrand />
        {login ? <Nav.NavLogin /> : <Nav.NavNotLogin />}
      </Toolbar>
  	</AppBar>
	)
}
export default AdminNavbar;