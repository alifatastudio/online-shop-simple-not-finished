import React, {useContext} from 'react';
import * as Context from '../AppContext';
import Config from '../Config';
import { useHistory } from 'react-router-dom';
import * as Style from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const drawerWidth = Config.drawerWidth;
const useStyles = Style.makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

function AdminSidenav(){
  	const { mobileOpen, handleDrawerToggle } = useContext(Context.AppContext);
	const classes = useStyles();
  	const theme = Style.useTheme();
  	const history = useHistory()

  	const menus =[
  		{name: 'Dashboard', url: '/admin'},
  		{name: 'Product', url: '/admin/product'},
  		{name: 'Order', url: '/admin/order'},
  		{name: 'Product', url: '/admin/product'},
  	];

  	const drawer = (
	    <div>
	      <div className={classes.toolbar} />
	      <Divider />
	      <List>
	        {menus.map((menu, index) => (
	          <ListItem button key={menu.name} onClick={() => history.push(menu.url)} >
	            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
	            <ListItemText primary={menu.name} />
	          </ListItem>
	        ))}
	      </List>
	    </div>
	  );

	return (
		<nav className={classes.drawer} aria-label="mailbox folders">
	        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
	        <Hidden smUp implementation="css">
	          <Drawer
	            variant="temporary"
	            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
	            open={mobileOpen}
	            onClose={handleDrawerToggle}
	            classes={{
	              paper: classes.drawerPaper,
	            }}
	            ModalProps={{
	              keepMounted: true, // Better open performance on mobile.
	            }}
	          >
	            {drawer}
	          </Drawer>
	        </Hidden>
	        <Hidden xsDown implementation="css">
	          <Drawer
	            classes={{
	              paper: classes.drawerPaper,
	            }}
	            variant="permanent"
	            open
	          >
	            {drawer}
	          </Drawer>
	        </Hidden>
	      </nav>
	)
}

export default AdminSidenav;