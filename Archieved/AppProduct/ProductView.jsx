import React from 'react';
import ProductMedia from './ProductMedia';
import ProductDetails from './ProductDetails';

function ProductView(){
    return (
        <React.Fragment>
            <div className="app-product">
                <ProductMedia />
                <ProductDetails />
            </div>
        </React.Fragment>
    )
}

export default ProductView;