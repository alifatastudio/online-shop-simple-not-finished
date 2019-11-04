import React, { useEffect, useState } from 'react';
import * as ProductService from '../Service/Product';
import * as Style from '@material-ui/core/styles';
import ProductCard from '../Component/ProductCard';

const useStyles = Style.makeStyles(theme => ({
  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '10px'
  }
}));

function App(){
    const [products, setProducts] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        ProductService.GetFavoriteByUser(1).then(data => {
            setProducts(data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className={classes.productList}>
            {products.map(product => (
                <ProductCard product={product} key={product.id}  />
            ))}
        </div>
    )
}

export default App;