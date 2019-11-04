import React, {useContext} from 'react';
import * as Context from './AppContext';
import * as ProductCard from '../Component/ProductCard';
import * as Style from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';

const useStyles = Style.makeStyles(theme => ({
  card: {
  	margin: '5px',
    width: 'calc(25% - 10px)',
    cursor: 'pointer'
  }
}));

function ActionAdmin({product}){
	const { 
        setDialogDelete
    } = useContext(Context.AppContext);
    const history = useHistory();

    const handleDelete = () => {
        setDialogDelete({
        	isOpen: true, id: product.id
        })
    }

    const handleEdit = () => {
        history.push(`/admin/product?page=edit&id=${product.id}`);
    }

    return (
        <CardActions>
            <Button 
                size="small" 
                color="primary"
                onClick={handleEdit}
            >
                Edit
            </Button>
            <Button 
                size="small" 
                color="secondary"
                onClick={handleDelete}
            >
                Delete
            </Button>
        </CardActions>
    )   
}

export default function ProductCardAdmin({product}){
	const classes = useStyles();

	return (
		<Card className={classes.card} >
			<ProductCard.Content product={product} />
			<ActionAdmin product={product} />
		</Card>
	)
}