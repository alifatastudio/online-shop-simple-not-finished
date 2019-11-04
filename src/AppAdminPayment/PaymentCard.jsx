import React, { useContext } from 'react';
import * as Context from './AppContext';
import * as Style from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const useStyles = Style.makeStyles(theme => ({
  card: {
  	display: 'flex',
    width: 'calc(50% - 10px)',
    margin: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease 0s'
  },
  media: {
  	width: '40%'
  },
  detail: {
  	width: '60%'
  },
  actionBtn: {
  	float: 'right'
  }
}));

export default function PaymentCard({payment}){
	const { setDialogDelete } = useContext(Context.AppContext);
	const classes= useStyles();
	const history = useHistory();

	const handleDelete = () => {
        setDialogDelete({
        	isOpen: true, id: payment.id
        })
    }

    const handleEdit = () => {
        history.push(`/admin/payment?page=edit&id=${payment.id}`);
    }

	return (
		<Card 
			className={classes.card}
			key={payment.id} >
			<CardMedia 
	            className={classes.media}
	            image={(payment.image && payment.image[0]) ? payment.image[0] : 'https://picsum.photos/300'}
	            title={payment.bankName}
	        />
	        <CardContent className={classes.detail}>
	            <Typography component="h5" variant="h5">
	               	{payment.userName}
	            </Typography>
	            <Typography variant="subtitle1" color="textSecondary" >
	               {payment.bankName}
	            </Typography>
	            <Typography variant="subtitle1" color="textSecondary" >
	               {payment.rekeningNumber}
	            </Typography>
	            <CardActions className={classes.actionBtn} >
		            <Button 
		                size="small" 
		                color="primary"
		                onClick={handleEdit}
		            >
		                Edit
		            </Button>
		            <Button 
		                size="small" 
		                color="secondary"
		                onClick={handleDelete}
		            >
		                Delete
		            </Button>
		        </CardActions>
	        </CardContent>
	    </Card>
	)
}