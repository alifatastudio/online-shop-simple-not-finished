import React, { useEffect, useContext } from 'react';
import * as Context from './AppContext';
import * as UserService from '../Service/User';
import * as Style from '@material-ui/core/styles';
import { useQuery } from '../Utils/Router';
import AccountView from './AccountView';
import AccountEdit from './AccountEdit';

const useStyles = Style.makeStyles(theme => ({
    container: {
        width: '60%',
        marginTop: '25px',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}));

function getPageContext(Resource){
    switch(Resource){
        case 'edit':
            return <AccountEdit />
        default: 
            return <AccountView />
    }   
}

function App(){
    const { setUser } = useContext(Context.AppContext);
    const query = useQuery();
    const classes = useStyles();

    useEffect(() => {
        UserService.GetCurrentUser().then(data => {
            setUser(data);
        }).catch(err => {
            console.log(err);
        })
    }, [setUser])

    return (
        <div className={classes.container} >
            {getPageContext(query.get('page'))}
        </div>
    )
}

export default App;