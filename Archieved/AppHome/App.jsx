import React, {useContext, useEffect} from 'react';
import { AppHomeContext } from './AppContext';
import * as ProductService from '../Service/Product';
import Products from './Products';

function App(){
    const { products, dispatch } = useContext(AppHomeContext);

    useEffect(()=>{
        ProductService.GetAll().then(data => {
            dispatch({type: 'SET_PRODUCTS', data})
        }).catch(err => {
            console.log(err)
        })
    }, [dispatch]);

    return (
        <React.Fragment>
            <div style={{
                backgroundColor: 'grey',
                height: '30vh',
                width: '100%',
                textAlign: 'center',
                color: 'white',
                borderRadius: '.5rem'
            }}>Home slider, promo, etc</div>
            
            <Products 
                products={products}
            />
        </React.Fragment>
    )
}

export default App;