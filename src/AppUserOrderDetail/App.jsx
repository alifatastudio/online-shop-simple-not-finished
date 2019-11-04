import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Context from './AppContext';
import * as OrderService from '../Service/Order';
import * as Style from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import NumberFormat from 'react-number-format';

const useStyles = Style.makeStyles(theme => ({
    container: {
        width: '50%',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    input: {
        width: '100%',
        marginTop: '15px'
    },
    bold: {
        fontWeight: 'bold'
    }
}));

function App(){
	const { order, setOrder } = useContext(Context.AppContext);
	const { id } = useParams();
    const classes = useStyles();

	useEffect(() => {
		OrderService.GetOrderById(id).then(data => {
			setOrder(data);
		}).catch(err => {
			console.log(err)
		})
	}, [setOrder, id])

    const productOrder = [
        {id: 1, name: 'Product Name', value: order.product.name},
        {
            name: 'Price', id: 2,
            value: <NumberFormat 
                        value={order.product.price} 
                        displayType={'text'} 
                        thousandSeparator
                        prefix={'$'} />
        },
        {name: 'Quantity', value: order.quantity, id: 3},
        {
            id: 4, name: <span className={classes.bold}>Total</span>, 
            value: <NumberFormat
                    className={classes.bold}
                    value={order.product.price * parseFloat(order.quantity)} 
                    displayType={'text'} 
                    thousandSeparator 
                    prefix={'$ '} />
        },
        {
            id: 5, name: <span className={classes.bold}>Status</span>, 
            value: <span className={classes.bold}>{order.status}</span>
        },
        {id: 6, name: 'Message for seller', value: order.message}
    ]

    const shippingAdress = [
        {name: 'Full Name', value: order.name},
        {name: 'Phone', value: order.phone},
        {name: 'Address', value: order.address}
    ]
	return (
		<div className={classes.container} >
            <h4>Product Order</h4>
            <List component="nav" className="" aria-label="order info">
                {productOrder.map(p => (
                    <React.Fragment key={p.id} >
                        <ListItem button divider>
                            <ListItemText>
                                {p.name} : {p.value}
                            </ListItemText>
                        </ListItem>
                        <Divider light />
                    </React.Fragment>
                ))}
            </List>

            <h4>Shipping Address</h4>
            <List component="nav" className="" aria-label="order info">
                {shippingAdress.map(s => (
                    <ListItem button divider key={s.name}>
                        <ListItemText>
                            {s.name} : {s.value}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
	)
}
export default App