import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import * as Context from './AppContext';
import * as Style from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

const useStyles = Style.makeStyles(theme => ({
    card: {
        display: 'flex'
    },
    content: {
        width: '55%',
        minHeight: '200px'
    },
    editBtn: {
       float: 'right' 
    },
    cover: {
        width: '45%'
    }
}));

export default function AccountView(){
    const { user } = useContext(Context.AppContext);
    const history = useHistory();
    const classes = useStyles();

    const handleEdit  = () =>  {
        history.push('/account?page=edit');
    }    

    const details = [
        {id: 1, value: user.displayName, comp: 'h5', var: 'h5'},
        {id: 2, value: user.email, comp: 'p', var: 'subtitle1'},
        {id: 3, value: user.phone, comp: 'p', var: 'subtitle1', br2: true},
        {id: 4, value: user.address, comp: 'p', var: 'subtitle1', br: true},
        {id: 5, value: user.portalCode, comp: 'p', var: 'subtitle1'}
    ]
    return (
        <Card className={classes.card} >
            <CardContent className={classes.content} >
                {details.map(d => (
                    <React.Fragment key={d.id}>
                        <Typography 
                            component={d.comp} 
                            variant={d.var}
                            color={d.var === 'subtitle1'? 'textSecondary': 'primary'} >
                            {d.value}
                        </Typography>
                        {d.br ? <br/>: null}
                        {d.br2 ? <React.Fragment><br/><br/></React.Fragment> : null}
                    </React.Fragment>
                ))}
                <div className={classes.editBtn} >
                    <Fab 
                        onClick={handleEdit}
                        color="secondary" 
                        aria-label="edit" 
                        size="small" >
                        <EditIcon />
                    </Fab>
                </div>
            </CardContent>
            <CardMedia 
                className={classes.cover}
                image={user.photoUrl}
                src="image"
                title="displayName"
            />
        </Card>
    )
}