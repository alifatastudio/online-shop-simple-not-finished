import React, { useContext, useEffect } from 'react';
import * as Context from './AppContext';
import * as ProductService from '../Service/Product';
import ProductCard from '../Component/ProductCard';
import * as Style from '@material-ui/core/styles';

const useStyles = Style.makeStyles(theme => ({
  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '10px'
  }
}));

function App(){
	const { products, setProducts } = useContext(Context.AppContext);
    const classes = useStyles();

	useEffect(()=>{
        ProductService.GetAll().then(data => {
            setProducts(data);
        }).catch(err => {
            console.log(err)
        })
    }, [setProducts]);

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
			
            <div className={classes.productList} >
                {products.map(product => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
		</React.Fragment>
	)
}

export default App;