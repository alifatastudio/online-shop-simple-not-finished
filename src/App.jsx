import React, { useContext } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import * as Context from './AppContext';
import * as Style from '@material-ui/core/styles';
import AdminNavbar from './Component/AdminNavbar';
import AdminSidenav from './Component/AdminSidenav';
import AppAdmin from './AppAdmin/Index';
import AppHome from './AppHome/Index';
import AppLogin from './AppLogin/Index';
import AppNotFound from './AppNotFound/Index';
import AppProduct from './AppProduct/Index';
import AppUserAccount from './AppUserAccount/Index';
import AppUserFavorite from './AppUserFavorite/Index';
import AppUserOrder from './AppUserOrder/Index';
import AppUserOrderDetail from './AppUserOrderDetail/Index';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './Component/Navbar';
import Snackbar from './Component/Snackbar';

const useStyles = Style.makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));

export default function App(){
  const { openSnackbar } = useContext(Context.AppContext);
  const location = useLocation();
  const classes = useStyles();

  const isRouteAdmin = location.pathname.search('admin');
  const routers = [
    {path: '/favorite', comp: AppUserFavorite },
    {path: '/account', comp: AppUserAccount },
    {path: '/order/:id', comp: AppUserOrderDetail },
    {path: '/order', comp: AppUserOrder },
    {path: "/p/:id", comp: AppProduct },
    {path: "/admin", comp: AppAdmin },
    {path: "/login", comp: AppLogin }
  ]

  return (
    <div className={classes.root}>
      <CssBaseline />

      {isRouteAdmin === 1 ? 
        <React.Fragment>
          <AdminNavbar />
          <AdminSidenav />
        </React.Fragment> : 
      <Navbar /> }

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch> 
          {routers.map(r => (
            <Route path={r.path} component={r.comp} key={r.path} />
          ))}
          <Route exact path="/" component={AppHome} />
          <Route path="*" component={AppNotFound}  />
        </Switch>
      </main>
      {openSnackbar.isOpen ? <Snackbar /> : null }
    </div>
  )
}