import React, { useContext } from 'react';
import * as Context from './AppContext';
import * as MainContext from '../AppContext';
import DialogDelete from '../Component/DialogDelete';

export default function PaymentDelete(){
	const { dialogDelete, setDialogDelete, dispatch } = useContext(Context.AppContext);
    const { setOpenSnackbar } = useContext(MainContext.AppContext);
    const { isOpen, id } = dialogDelete;

    const handleClose = () => setDialogDelete({
        id: '', isOpen: false
    })

    const handleDelete = () => {
        dispatch({type: 'DELETE_DATA', id});
        setDialogDelete({id: '', isOpen: false});
        setOpenSnackbar({isOpen: true, message: 'delete success.'})
    }

	return <DialogDelete 
				isOpen={isOpen}  
				handleClose={handleClose}
				message='Delete this payment ?'
				handleDelete={handleDelete}
			/>
}