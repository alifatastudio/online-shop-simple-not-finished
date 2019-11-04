import React, {useContext} from 'react';
import * as Context from './AppContext';
import * as Style from '@material-ui/core/styles';
import * as InputUtils from '../Utils/Input';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';

const useStyles = Style.makeStyles(theme => ({
    input: {
        width: '100%',
        marginTop: '25px'
    }, 
    saveBtn: {
        marginTop: '25px'
    }
}));

export default function AccountEdit(){
    const { user, setUser } = useContext(Context.AppContext);
    const history = useHistory();
    const classes = useStyles();
    const handleChange = name => event => {
        setUser({ ...user, [name]: event.target.value });
    };

    const handleSave = () => {
        history.push('/account');
    }
    
    const inputs = [
        {
            name: 'displayName', label: 'Name', ph: 'John...', 
            value: user.displayName, disabled: true
        },{
            name: 'email', label: 'Email', ph: 'domain@gmail.com', 
            value: user.email, disabled: true
        },{
            name: 'phone', label: 'Phone number', ph: 'Active phone number...', 
            value: user.phone, disabled: false
        },{
            name: 'address', label: 'Address', ph: 'Your Address...', 
            value: user.address, disabled: false, multiline: true
        },{
            name: 'portalCode', label: 'Portal Code', ph: '511xx', 
            value: user.portalCode, disabled: false, numeric: true
        },
    ]

    return (
        <React.Fragment>
            {inputs.map(i => (
                <TextField
                    key={i.name}
                    id={i.name}
                    name={i.name}
                    label={i.label}
                    placeholder={i.ph}
                    className={classes.input}
                    value={i.value}    
                    onChange={handleChange(i.name)}
                    InputProps={ i.numeric && {
                        inputComponent:  InputUtils.NFNotThousandSeparator,
                    }}
                    multiline={i.multiline}
                />
            ))}
            
            <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={handleSave}
                className={classes.saveBtn}
                startIcon={<SaveIcon />}
            >
                Save
            </Button>
        </React.Fragment>
    )
}