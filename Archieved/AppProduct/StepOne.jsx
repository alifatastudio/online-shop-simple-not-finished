import React, {useContext} from 'react';
import { AppProductContext } from './AppContext';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
        />
    );
}


function StepOne(){
    const { 
        product, 
        valuesBuy, setValuesBuy
    } = useContext(AppProductContext);

    const handleChange = name => event => {
        setValuesBuy({ ...valuesBuy, [name]: event.target.value });
    };
        
    return (
        <React.Fragment>
            <div>
                <div style={{
                    textAlign: 'center'
                }}>
                    <img 
                        src={product.images[0]}
                        alt="product"
                        style={{
                            width: '50%',
                            borderRadius: '15px'
                        }}
                    />
                </div>
                <div style={{
                    textAlign: 'center'
                }}>
                    <span style={{
                        fontSize: '21px',
                    }}>{product.name}</span>
                </div>
                <div>
                    <span>Total : </span>
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
                    className="w-50 my-3"                                                      
                    value={valuesBuy.quantity}
                    onChange={handleChange('quantity')}
                    style={{
                        width: '25%',
                        marginTop: '10px'
                    }}
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
                
                <TextField
                    id="message" 
                    name="message" 
                    label="Message for seller"
                    placeholder="Type your message..."
                    className=""
                    style={{
                        width: '100%',
                        marginTop: '10px'
                    }}
                    value={valuesBuy.message}    
                    onChange={handleChange('message')}
                    multiline
                />
            </div>
        </React.Fragment>
    )
}

export default StepOne;