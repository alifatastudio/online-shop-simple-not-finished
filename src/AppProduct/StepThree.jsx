import React, {useContext} from 'react';
import * as Context from './AppContext';
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

function StepThree(){
    const { product, valuesBuy } = useContext(Context.AppContext);
    const classes = useStyles();

    const productOrder = [
        {name: 'Product Name', value: product.name},
        {
            name: 'Price', 
            value: <NumberFormat 
                        value={product.price} 
                        displayType={'text'} 
                        thousandSeparator
                        prefix={'$'} />
        },
        {name: 'Quantity', value: valuesBuy.quantity},
        {
            name: <span className={classes.bold}>Total</span>, 
            value: <NumberFormat
                    value={product.price * parseFloat(valuesBuy.quantity)} 
                    displayType={'text'} 
                    thousandSeparator 
                    prefix={'$ '} />
        },
        {name: 'Message for seller', value: valuesBuy.message}
    ]

    const shippingAdress = [
        {name: 'Full Name', value: valuesBuy.name},
        {name: 'Phone', value: valuesBuy.phone},
        {name: 'Address', value: valuesBuy.address}
    ]

    return (
        <div className={classes.container} >
            <h4>Product Order</h4>
            <List component="nav" className="" aria-label="order info">
                {productOrder.map(p => (
                    <React.Fragment key={p.name} >
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

export default StepThree;