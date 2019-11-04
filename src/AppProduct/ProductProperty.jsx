import React, { useContext } from 'react';
import * as Context from './AppContext';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import * as Style from '@material-ui/core/styles';

const useStyles = Style.makeStyles(theme => ({
    footer: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 0,
        height: '10vh',
        zIndex: 9,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1px 5%', 
        backgroundColor: '#fff', 
        border: '1px solid rgba(0, 0, 0, 0.125)',
        borderTopLeftRadius: '0.75rem',
        borderTopRightRadius: '0.75rem'
    },
    buyButton: {
        width: '250px'
    }
}));

export function PropertyView(){
    const {
        product,
        like, setLike,
        cart, setCart,
    } = useContext(Context.AppContext);
    const history = useHistory();
    const classes = useStyles();

    return (
        <footer className={classes.footer} >
            <Button 
                color="primary"
                onClick={() => setLike(!like)} >
                {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </Button>\
            <Button
                color="primary"
                onClick={() => setCart(!cart)}
            >
                {cart ? <ShoppingCartIcon />: <ShoppingCartOutlinedIcon />}
            </Button>
            <Button 
                onClick={() => history.push(`/p/${product.id}?page=buy`)}
                className={classes.buyButton}
                variant="contained" 
                color="primary">
                Buy
            </Button>
        </footer>
    )
}

export function PropertyBuy(){
    const {
        activeStep, setActiveStep, steps
    } = useContext(Context.AppContext);
    const classes = useStyles();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleOrder = () => {
        console.log('Order Success')
    }

    return (
        <footer className={classes.footer} >
            <Button
                disabled={activeStep === 0}
                onClick={handleBack}
            >
                Back
            </Button>
            {activeStep === steps.length - 1 ? 
                <Button 
                    className={classes.buyButton}
                    variant="contained" 
                    color="primary" 
                    onClick={handleOrder} >
                    Order Now
                </Button> :
                    <Button 
                    className={classes.buyButton}
                    variant="contained" 
                    color="primary" 
                    onClick={handleNext} >
                    Next
                </Button>
            }
        </footer>
    )
}