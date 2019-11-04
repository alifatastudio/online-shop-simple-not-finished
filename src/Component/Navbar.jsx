import React, { useState, useContext } from 'react';
import * as Context from '../AppContext';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export function NavBrand(){
	const history = useHistory();
	const goHome = () => history.push('/');

	return (
		<Button
			onClick={goHome}
	        variant="contained" 
	        color="primary" >
	    		BRAND
		</Button>
	)
}

export function NavNotLogin(){
	const history = useHistory();
	const goLogin = () => history.push('/login');

    return (
        <Button
			onClick={goLogin}
            variant="contained" 
            color="primary">
                Login
        </Button>
    )
}

export function NavLogin(){
	const [anchorEl, setAnchorEl] = useState(null);
	const { admin, login, setLogin } = useContext(Context.AppContext);
	const history = useHistory();

	const handleClickMenu = event => setAnchorEl(event.currentTarget);
	const handleCloseMenu = url => () => {
        setAnchorEl(null);
        if(url) {
            history.push(url);
        }
    };

    const handleLogOut = () => {
        setLogin(!login);
        history.push('/')
    }

    const menus = [
    	{url: '/account', label: 'My account'},
    	{url: '/account?page=edit', label: 'Edit account'},
    	{url: '/order', label: 'Product order'},
    	{url: '/shopping-cart', label: 'Shopping cart'},
    	{url: '/favorite', label: 'Favorite'}
    ];

	return (
		<React.Fragment>
			<Button
                aria-controls="menu-user" 
                aria-haspopup="true" 
                onClick={handleClickMenu}
                variant="contained" 
                color="primary"
                endIcon={<MoreVertIcon />} >
                    FULL NAME
            </Button>
            <Menu
                id="menu-user"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu()}
            >
         		{admin && 
                    <MenuItem onClick={handleCloseMenu('/admin')}>
            		  Admin dashboard
            	   </MenuItem>}
         		   	
            	{menus.map(menu => (
            		<MenuItem key={menu.url} onClick={handleCloseMenu(menu.url)}>
                		{menu.label}
                	</MenuItem>
            	))}
            	<MenuItem onClick={handleLogOut}>
            		Logout
            	</MenuItem>
            </Menu> 
		</React.Fragment>
	)
}

function Navbar(){
	const { login } = useContext(Context.AppContext);

	return (
		<AppBar position="fixed">
	        <Toolbar>
	        	<NavBrand />
	        	{login ? <NavLogin /> : <NavNotLogin />}
	        </Toolbar>
      	</AppBar>
	)
}

export default Navbar;