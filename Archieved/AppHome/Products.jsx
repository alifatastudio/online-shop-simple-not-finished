import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

function Products({products}){
    return (
        <div className="product-card-container">
            {products.map(product => (
                <ProductCard 
                    product={product}
                    key={product.id}
                />
            ))}
        </div>
    )
}

export default Products;