import React, {useContext} from 'react';
import { AppProductContext } from './AppContext';
import TextField from '@material-ui/core/TextField';

function StepTwo(){
    const { 
        valuesBuy, setValuesBuy
    } = useContext(AppProductContext);
    
    const handleChange = name => event => {
        setValuesBuy({ ...valuesBuy, [name]: event.target.value });
    };

    return (
        <React.Fragment>
            <TextField
                id="name"
                name="name" 
                label="Full Name"
                placeholder="Your full name..."
                className=""
                style={{
                    width: '100%',
                    marginTop: '10px'
                }}
                value={valuesBuy.name}    
                onChange={handleChange('name')}
            />
            <TextField
                id="phone" 
                name="phone" 
                label="Phone Number"
                placeholder="021XXXX..."
                className=""
                style={{
                    width: '100%',
                    marginTop: '10px'
                }}
                value={valuesBuy.phone}    
                onChange={handleChange('phone')}
            />
            <TextField
                id="address" 
                name="address" 
                label="Complete address"
                placeholder="Your address..."
                className=""
                style={{
                    width: '100%',
                    marginTop: '10px'
                }}
                value={valuesBuy.address}    
                onChange={handleChange('address')}
                multiline
            />
        </React.Fragment>
    )
}

export default StepTwo;
