import React, { useState, useContext, useEffect } from 'react';
import * as Context from './AppContext';
import * as MainContext from '../AppContext';
import * as Style from '@material-ui/core/styles';
import * as PaymentService from '../Service/Payment';
import * as Input from '../Utils/Input';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../Utils/Router';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';

const useStyles = Style.makeStyles(theme => ({
	input75: {
		marginTop: '30px',
		width: '75%'
	},
	input25: {
		marginTop: '30px',
		width: '25%'
	},
	saveBtn: {
		marginTop: '30px'
	}
}));

export default function PaymentAddEdit(){
	const { dispatch } = useContext(Context.AppContext);
    const { setOpenSnackbar } = useContext(MainContext.AppContext);
	const [values, setValues] = useState({
        userName: '', bankName: '', rekeningNumber: ''
    });    
	const classes = useStyles();
	const history = useHistory();
	const query = useQuery();
	const page = query.get('page');
    const id = query.get('id');

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    }

    const handleSave = () => {
    	if(page === 'edit'){
    		dispatch({type: 'UPDATE_DATA', updatedData: {
                id: id,
                ...values
            }})
            setOpenSnackbar({isOpen: true, message: "update success"})
    	} else if(page === 'add'){
    		dispatch({type: 'ADD_DATA', addData: {id: Date.now(), ...values} });
            setOpenSnackbar({isOpen: true, message: "add success"})   	
        }

        setValues({
           userName: '', bankName: '', rekeningNumber: ''
        });
        history.push('/admin/payment')
    }


    useEffect(() => {
    	function WhenEdit(){
			if(page === 'edit'){
	    		PaymentService.GetById(id).then(data => {
	    			setValues(data)
	    		}).catch(err => {
	    			console.log(err);
	    		})
	    	}    		
    	}
    	WhenEdit();
    }, [id, page])

	const inputs = [
		{
			name: 'bankName', label: 'Bank Name', ph: 'Bank name...', 
			value: values.bankName, multiline: true 
		},{
			name: 'userName', label: 'Your Account Name', ph: 'John Doe...', 
			value: values.userName, multiline: true
		},{
			name: 'rekeningNumber', label: 'Rekening Number', ph: '092862..', 
			value: values.rekeningNumber, multiline: true, inputProps: { 
                inputComponent: Input.NFNTS,
            } 
		},
	]

	return (
		<div>
			{inputs.map(input => (
				<div key={input.name}>
					<TextField	
		                id={input.name} 
		                name={input.name} 
		                label={input.label}
		                placeholder={input.ph}
		                value={input.value}    
		                onChange={handleChange(input.name)}
		                multiline={input.multiline}
		                InputProps={input.inputProps}
		                className={input.multiline? classes.input75 : classes.input25}
		            />
				</div>
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
		</div>
	)
}