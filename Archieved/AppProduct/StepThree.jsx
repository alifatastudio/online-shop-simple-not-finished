import React, {useContext} from 'react';
import { AppProductContext } from './AppContext';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import NumberFormat from 'react-number-format';

function StepThree(){
    const { 
        product, 
        valuesBuy
    } = useContext(AppProductContext);

    return (
        <React.Fragment>
            <h4>Product Order</h4>
            <List component="nav" className="" aria-label="order info">
                <ListItem button divider>
                    <ListItemText>
                        Product Name : {product.name}
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        Price : 
                        <NumberFormat
                            value={product.price} 
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'$'} 
                        />
                    </ListItemText>
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText>
                        Quantity : {valuesBuy.quantity}
                    </ListItemText>
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText>
                        <span style={{
                            fontWeight: 'bold'
                        }}>TOTAL : </span>
                        <NumberFormat
                            value={product.price * parseFloat(valuesBuy.quantity)} 
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'$ '} 
                        />
                    </ListItemText>
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText>
                        Message for Seller : {valuesBuy.message}
                    </ListItemText>
                </ListItem>
            </List>

            <h4>Shipping Address</h4>
            <List component="nav" className="" aria-label="order info">
                <ListItem button divider>
                    <ListItemText>
                        Full Name : {valuesBuy.name}
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        Phone : {valuesBuy.phone}
                    </ListItemText>
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText>
                        Address : {valuesBuy.address}
                    </ListItemText>
                </ListItem>
            </List>
        </React.Fragment>
    )
}

export default StepThree;