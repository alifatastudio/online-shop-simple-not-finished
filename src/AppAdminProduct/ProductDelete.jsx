import React, { useContext } from 'react';
import * as Context from './AppContext';
import * as MainContext from '../AppContext';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProductDelete(){
	const { 
        dialogDelete, setDialogDelete, dispatch
    } = useContext(Context.AppContext);
    const { setOpenSnackbar } = useContext(MainContext.AppContext);
    const { isOpen, id } = dialogDelete;

    const handleClose = () => setDialogDelete({
        id: '', isOpen: false
    })

    const handleDelete = () => {
        dispatch({type: 'DELETE_DATA', id});
        setDialogDelete({id: '', isOpen: false});
        setOpenSnackbar({isOpen: true, message: 'delete success.'})
        // ProductService.Delete(id).then(data => {
        //     // setOpenSnackbar({isOpen: true, message: 'delete product success'})
        // }).catch(err => {
        //     // console.error('AppProductsAdmin/ProductDialogDelete DELETE PRODUCT', err);
        // })
    }

	return (
		<Dialog
            open={isOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose} >
            <DialogContent>
                <DialogContentText>
                    Delete this product ?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button 
                    onClick={handleClose} 
                    color="primary" >
                    Cancel
                </Button>
                <Button
                    color="secondary"
                    onClick={handleDelete} >
                    Delete
                </Button>
            </DialogActions>
      	</Dialog>
	)
}