import React, {useContext} from 'react';
import * as Context from './AppContext';
import NumberFormat from 'react-number-format';
import * as Style from '@material-ui/core/styles';

const useStyles = Style.makeStyles(theme => ({
	container: {
	    display: 'flex',
	    flexWrap: 'wrap',
	    paddingTop: '15px'
	},
	media: {
		maxWidth: '50%',
		flex: '0 0 50%'
	},
	detail: {
		maxWidth: '50%',
		flex: '0 0 50%',
		cursor: 'pointer'
	},
	imgPreview: {
		width: '100%',
    	borderRadius: '0.75rem',
    	boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)'
	},
	imgThumb: {
		maxWidth: '100px',
	    borderRadius: '0.75rem',
	    marginRight: '10px',
	    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
	    cursor: 'pointer'
	}, 
	name: {
		fontSize: '45px',
	    fontWeight: 400,
	},
	price: {
		fontSize: '35px',
	    fontWeight: 400,
	},
	description: {
		fontSize: '21px',
	    fontWeight: 400,
	},
}));

function ProductMedia(){
    const { product, imgPreview, setImgPreview } = useContext(Context.AppContext);
    const classes = useStyles();

    return (
        <div className={classes.media}>
            <div>
                <img 
                    src={imgPreview}
                    alt="product"
                    className={classes.imgPreview}
                />
            </div>
            <div>
                {product.images.map((image, index) => (
                    <img onClick={() => setImgPreview(image)}
                        key={index}
                        src={image}
                        alt="product"
                        className={classes.imgThumb}
                    />
                ))}
            </div>
        </div>
    )
}

function ProductDetail(){
    const { product } = useContext(Context.AppContext);
    const classes = useStyles();

    return (
        <div className={classes.detail} >
            <p className={classes.name} >
                {product.name}
            </p>
            <NumberFormat 
                className={classes.price}
                value={product.price} 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'$ '} 
            />
            <p className={classes.description}>
                {product.description}
            </p>
        </div>
    )
}

function ProductView(){
    const classes = useStyles();

    return (
	    <div className={classes.container} >
	        <ProductMedia />
	        <ProductDetail />
	    </div>
    )
}

export default ProductView;