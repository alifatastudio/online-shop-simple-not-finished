import React, { useContext } from 'react';
import * as Context from './AppContext';
import * as Style from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import NumberFormat from 'react-number-format';
import Typography from '@material-ui/core/Typography';

const useStyles = Style.makeStyles(theme => ({
  wraper: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '15px'
  }, 
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
  }
}));

function OrderView(){
	const { products } = useContext(Context.AppContext);
	const history =useHistory();
	const classes = useStyles();

	const handleClick = orderId => () => {
		history.push(`/order/${orderId}`);
	}

	return (
		<div className={classes.wraper}>
			{products.map(product => (
				<Card 
					className={classes.card}
					key={product.id} onClick={handleClick(product.id)}>
					<CardMedia 
		                className={classes.media}
		                image={product.product.images[0]}
		                title={product.name}
		            />
		            <CardContent className={classes.detail}>
		                <Typography component="h5" variant="h5">
		                   	{product.product.name}
		                </Typography>
		                <Typography variant="subtitle1" color="textSecondary" >
		                    Status : {product.status}
		                </Typography>
		                <Typography variant="subtitle1" color="textSecondary" >
		                    Total : <NumberFormat 
					                    value={product.quantity * product.product.price} 
					                    displayType={'text'} 
					                    thousandSeparator 
					                    prefix={'$ '} 
					                />
		                </Typography>
		            </CardContent>
		        </Card>
			))}
		</div>
	)
}
export default OrderView;