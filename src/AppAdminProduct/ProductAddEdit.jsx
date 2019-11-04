import React, { useState, useContext, useEffect } from 'react';
import * as Context from './AppContext';
import * as MainContext from '../AppContext';
import * as Style from '@material-ui/core/styles';
import * as Input from '../Utils/Input';
import * as ProductService from '../Service/Product';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../Utils/Router';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
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

export default function ProductAddEdit(){
	const { 
       	dispatch
    } = useContext(Context.AppContext);
    const { setOpenSnackbar } = useContext(MainContext.AppContext);
	const [values, setValues] = useState({
        name: '', 
        price: 100,
        stock: 1,
        weight: 100,
        description: ''
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
            name: '', 
            price: 100,
            stock: 1,
            weight: 100,
            description: ''
        });
        history.push('/admin/product')
    	// ProductService.Add(values).then(data => {
            
     //    }).catch(err => {
     //        console.log(err)
     //    })
    }


    useEffect(() => {
    	function WhenEdit(){
			if(page === 'edit'){
	    		ProductService.GetById(id).then(data => {
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
			name: 'name', label: 'Product Name', ph: 'Product name...', 
			value: values.name, multiline: true 
		},{
			name: 'price', label: 'Price', ph: '100', 
			value: values.price, multiline: false, inputProps: {
                inputComponent: Input.NumberFormatInput,
                startAdornment: <InputAdornment position="start">$</InputAdornment>
            }
		},{
			name: 'stock', label: 'Stock', ph: '1', 
			value: values.stock, multiline: false, inputProps: { 
                inputComponent: Input.NumberFormatInput
            }
		},{
			name: 'weight', label: 'Weight', ph: '100', 
			value: values.weight, multiline: false, inputProps: { 
                inputComponent: Input.NumberFormatInput,
                endAdornment: <InputAdornment position="end">gram</InputAdornment>
            }
		},{
			name: 'description', label: 'Description', ph: 'descrption...', 
			value: values.description, multiline: true
		}
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
		                className={input.multiline? classes.input75 : classes.input25}
		                InputProps={input.inputProps}
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