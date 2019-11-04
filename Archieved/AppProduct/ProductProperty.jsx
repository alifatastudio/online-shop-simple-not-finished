import React, {useContext} from 'react';
import { AppProductContext } from './AppContext';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

export function PropertyView(){
    const {
        product,
        like, setLike,
        cart, setCart,
    } = useContext(AppProductContext);
    const history = useHistory();

    return (
        <footer className="navbar-footer">
            <Button 
                color="primary"
                onClick={() => setLike(!like)} >
                {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </Button>
            <Button
                color="primary"
                onClick={() => setCart(!cart)}
            >
                {cart ? <ShoppingCartIcon />: <ShoppingCartOutlinedIcon />}
            </Button>
            <Button 
                onClick={() => history.push(`/p/${product.id}?page=buy`)}
                className="btn-buy"
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
    } = useContext(AppProductContext);

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
        <footer className="navbar-footer">
            <Button
                disabled={activeStep === 0}
                onClick={handleBack}
            >
                Back
            </Button>
            {activeStep === steps.length - 1 ? 
                <Button 
                    className="btn-buy"
                    variant="contained" 
                    color="primary" 
                    onClick={handleOrder} >
                    Order Now
                </Button> :
                    <Button 
                    className="btn-buy"
                    variant="contained" 
                    color="primary" 
                    onClick={handleNext} >
                    Next
                </Button>
            }
        </footer>
    )
}