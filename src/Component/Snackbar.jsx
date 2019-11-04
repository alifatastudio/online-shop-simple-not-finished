import React, { useContext } from 'react';
import * as Context from '../AppContext';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

export default function SnackBar({duration=5000}){
    const { openSnackbar, setOpenSnackbar } = useContext(Context.AppContext);
    const { isOpen, message } = openSnackbar;

    const handleClose = () => setOpenSnackbar({isOpen: false, message: ''})

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
            open={isOpen}
            autoHideDuration={duration}
            onClose={handleClose}
            TransitionComponent={SlideTransition}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{message}</span>}
            action={[
                <Button 
                    key="close" 
                    color="secondary" 
                    size="small" 
                    onClick={handleClose}>
                    close
                </Button>
            ]}
      />
    )
}