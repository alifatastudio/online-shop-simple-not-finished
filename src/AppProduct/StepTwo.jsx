import React, {useContext} from 'react';
import * as Context from './AppContext';
import TextField from '@material-ui/core/TextField';
import * as Style from '@material-ui/core/styles';

const useStyles = Style.makeStyles(theme => ({
    container: {
        width: '50%',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    input: {
        width: '100%',
        marginTop: '15px'
    }
}));

function StepTwo(){
    const { valuesBuy, setValuesBuy } = useContext(Context.AppContext);
    const classes = useStyles();
    
    const handleChange = name => event => {
        setValuesBuy({ ...valuesBuy, [name]: event.target.value });
    };

    const inputs = [
        {id: 'name', label: 'Full name', ph: 'Your full name', value: valuesBuy.name},
        {id: 'phone', label: 'Active phone number', ph: '021xxx...', value: valuesBuy.phone },
        {id: 'address', label: 'Adress shipping', ph: 'Address shipping...', value: valuesBuy.address },
    ]

    return (
        <div className={classes.container}>
            {inputs.map(input => (
                <TextField
                    key={input.id}
                    id={input.id}
                    name={input.name}
                    label={input.label}
                    placeholder={input.ph}
                    className={classes.input}
                    value={input.value}    
                    onChange={handleChange(input.id)}
                />
            ))}
            
        </div>
    )
}

export default StepTwo;
