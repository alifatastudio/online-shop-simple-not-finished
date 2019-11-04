import React, {useState} from 'react';
import './ProductCard.css';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

function ProductCard({product}){
    const [like, setLike] = useState(false);
    const [cart, setCart] = useState(false);
    const history = useHistory();

    const handleBuy = () => history.push(`/p/${product.id}?page=buy`)
    
    return (
        <Card className="product-card">
        <CardActionArea>
          <CardMedia
            className="media"
            image={product.images[0]}
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
                className="btn-buy"
                variant="contained"
                onClick={handleBuy}
            >
                Buy
            </Button>
        </CardActions>
      </Card>
    )
}

export default ProductCard;