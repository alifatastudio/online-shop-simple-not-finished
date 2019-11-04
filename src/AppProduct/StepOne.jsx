import React, { useContext } from 'react';
import * as Context from './AppContext';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';
import * as Input from '../Utils/Input';
import * as Style from '@material-ui/core/styles';

const useStyles = Style.makeStyles(theme => ({
    container: {
        width: '50%',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    txtCenter: {
        textAlign: 'center'
    },
    media: {
        width: '50%',
        borderRadius: '15px'
    },
    name: {
        fontSize: '21px'
    },
    total: {
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        marginTop: '15px'
    },
    inputQuantity: {
        width: '25%',
        marginTop: '15px'
    }
}));

function StepOne(){
    const { product, valuesBuy, setValuesBuy } = useContext(Context.AppContext);
    const classes = useStyles();

    const handleChange = name => event => {
        setValuesBuy({ ...valuesBuy, [name]: event.target.value });
    };
        
    return (
        <div className={classes.container}>
            <div className={classes.txtCenter}>
                <img 
                    src={product.images[0]}
                    alt="product"
                    className={classes.media}
                />
                <br/>
                <span className={classes.name}>{product.name}</span>
            </div>
                    
            <div>
                <span className={classes.total} >Total : </span>
                <NumberFormat
                    value={product.price * parseFloat(valuesBuy.quantity)} 
                    displayType={'text'} 
                    thousandSeparator={true} 
                    prefix={'$ '} 
                />
            </div>
                
            <TextField
                id="quantity" 
                name="quantity" 
                label="quantity"
                className={classes.inputQuantity}                                                      
                value={valuesBuy.quantity}
                onChange={handleChange('quantity')}
                InputProps={{
                    inputComponent: Input.NumberFormatInput,
                }}
            />
                
            <TextField
                id="message" 
                name="message" 
                label="Message for seller"
                placeholder="Type your message..."
                className={classes.input}
                value={valuesBuy.message}    
                onChange={handleChange('message')}
                multiline
            />
        </div>
    )
}

export default StepOne;