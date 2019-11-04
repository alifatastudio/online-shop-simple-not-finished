import React, { useContext } from 'react';
import * as Context from './AppContext';
import { useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import * as Style from '@material-ui/core/styles';
import ProductDelete from './ProductDelete';
import ProductCardAdmin from './ProductCardAdmin';

const useStyles = Style.makeStyles(theme => ({
	txtCenter: {
		textAlign: 'center'
	},
	productList: {
	    display: 'flex',
	    flexWrap: 'wrap',
	    marginTop: '10px'
  	}
}));

export default function ProductView(){
	const { 
        loading, products
    } = useContext(Context.AppContext);
    const classes = useStyles();
    const history = useHistory();

	return (
		<React.Fragment>
			<div>
	            <Tooltip title="Add product">
	                <Fab 
	                    color="primary" 
	                    aria-label="add"
	                    onClick={() => history.push('/admin/product?page=add')}
	                >
	                    <AddIcon />
	                </Fab>
	            </Tooltip>
	        </div>
	        {loading ? <p className={classes.txtCenter}>Loading data...</p>: null}
	        <div className={classes.productList}>
	        	{products.map(product => (
	        		<ProductCardAdmin product={product} key={product.id} />
	        	))}
	        </div>
            {!loading && (products.length === 0) ? <p className={classes.txtCenter}>No product in data</p>: null } 
		      
            <ProductDelete />
		</React.Fragment>
	)
}