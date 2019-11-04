import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext';
import { NavLink, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DashboardIcon from '@material-ui/icons/Dashboard';

function MenuList(){
    const { 
        login, setLogin, admin
    } = useContext(AppContext);
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickMenu = event => {
        setAnchorEl(event.currentTarget);
    };

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

    return (
        <React.Fragment>
            <Button
                ria-controls="menu-user" 
                aria-haspopup="true" 
                onClick={handleClickMenu}
                variant="contained" 
                color="primary"
                endIcon={<MoreVertIcon />}
                className="btn-link">
                    FULL NAME
            </Button>
            <Menu
                id="menu-user"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu()}
            >
                <MenuItem onClick={handleCloseMenu('/account')}>
                    <AccountCircleIcon /> 
                    <span style={{
                        marginLeft: '10px'
                    }}>My account</span>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu('/account?page=edit')}>
                    <EditIcon />
                    <span style={{
                        marginLeft: '10px'
                    }}>Edit my account</span>
                </MenuItem>
                {admin && 
                    <MenuItem onClick={handleCloseMenu('/admin/dashboard')}>
                        <DashboardIcon /> 
                        <span style={{
                            marginLeft: '10px'
                        }}>Admin Dashboard</span>
                    </MenuItem>
                }
                <MenuItem onClick={handleCloseMenu('/product-order')}>
                    <AssignmentIcon />
                    <span style={{
                        marginLeft: '10px'
                    }}>Product order</span>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu('/shopping-cart')}>
                    <ShoppingCartIcon />
                    <span style={{
                        marginLeft: '10px'
                    }}>Shopping cart</span>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu('/favorite')}>
                    <FavoriteIcon />
                    <span style={{
                        marginLeft: '10px'
                    }}>Favorite item</span>
                </MenuItem>
                <MenuItem onClick={handleLogOut}>
                    <ExitToAppIcon />
                    <span style={{
                        marginLeft: '10px'
                    }}>Logout</span>
                </MenuItem>
            </Menu>
        </React.Fragment>
    )
}

function NavLogin(){
    return (
        <NavLink className="" to="/login">
            <Button
                variant="contained" 
                color="primary"
                className="btn-link">
                    Login
            </Button>
        </NavLink>
    )
}

function NavMenu(){
    const { 
        login
    } = useContext(AppContext);

    return (
        <React.Fragment>
            {login ? <MenuList /> : <NavLogin />}
        </React.Fragment>
    )
}

export default NavMenu;