import React, {useContext} from 'react';
import { AppProductContext } from './AppContext';
import NumberFormat from 'react-number-format';

function ProductDetails(){
    const {
        product
    } = useContext(AppProductContext);

    return (
        <div className="details">
            <div>
                <span className="name">
                    {product.name}
                </span>
            </div>
            <NumberFormat 
                className="price"
                value={product.price} 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'$ '} 
            />
            <div>
                <span className="description">
                    {product.description}
                </span>
            </div>
        </div>
    )
}

export default ProductDetails;