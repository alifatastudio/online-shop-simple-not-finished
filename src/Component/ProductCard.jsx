import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NumberFormat from 'react-number-format';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import * as Style from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = Style.makeStyles(theme => ({
  card: {
  	margin: '5px',
    width: 'calc(25% - 10px)',
    cursor: 'pointer'
  },
  media: {
  	height: '300px',
    borderTopLeftRadius: '0.75rem',
    borderTopRightRadius: '0.75rem',
    transition: 'all 0.3s ease 0s'
  },
  buyButton: {
  	width: '200px'
  }
}));

export function Content({product}){
	const classes = useStyles();
    const history = useHistory();

    const handleClick = () => history.push(`/p/${product.id}`);
       
	return (
		<CardActionArea onClick={handleClick} >
             <CardMedia
                className={classes.media}
                image={(product.images && product.images[0]) ? product.images[0] : 'https://picsum.photos/300'}
                title={product.name}
              />
          <CardContent>
            <Typography 
                gutterBottom 
                variant="h5" 
                component="h2">
              {product.name}
            </Typography>
            <Typography 
                variant="body2" 
                color="textSecondary" 
                component="p" >
                <NumberFormat 
                    className="price"
                    value={product.price} 
                    displayType={'text'} 
                    thousandSeparator 
                    prefix={'$ '} 
                />
            </Typography>
          </CardContent>
        </CardActionArea>
	)	
}

function Action({product}){
	const [like, setLike] = useState(false);
    const [cart, setCart] = useState(false);
    const history = useHistory();
    const classes = useStyles();

    const handleBuy = () => history.push(`/p/${product.id}?page=buy`);

	return (
		<CardActions>
            <Button 
                size="small" 
                color="primary"
                onClick={() => setLike(!like)}
            >
                {like ? <FavoriteIcon /> : 
                    <FavoriteBorderIcon />}
            </Button>
            <Button 
                size="small" 
                color="primary"
                onClick={() => setCart(!cart)}
            >
                {cart ? <ShoppingCartIcon /> : 
                    <ShoppingCartOutlinedIcon /> }
            </Button>
            <Button 
                size="small" 
                color="primary"
                className={classes.buyButton}
                variant="contained"
                onClick={handleBuy}
            >
                Buy
            </Button>
        </CardActions>
	)	
}


export default function ProductCard({product}){	
	const classes = useStyles();

    return (
        <Card className={classes.card}>
        	<Content product={product} />

        	<Action product={product} />
      	</Card>
    )
}
