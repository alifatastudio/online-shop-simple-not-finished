import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogDelete({isOpen, handleClose, message, handleDelete}){
	return (
		<Dialog
            open={isOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose} >
            <DialogContent>
                <DialogContentText>
                    {message}
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