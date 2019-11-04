import React, { useContext, useEffect} from 'react';
import * as Context from './AppContext';
import * as ProductService from '../Service/Product';
import { useQuery } from '../Utils/Router';
import { useParams } from 'react-router-dom';
import ProductView from './ProductView';
import ProductBuy from './ProductBuy';
import * as Footer from './ProductProperty';

function getPageContent(Resource){
    switch(Resource){
        case 'buy':
            return (
                <React.Fragment>
                    <ProductBuy />
                    <Footer.PropertyBuy />
                </React.Fragment>
            )
        default:
            return (
                <React.Fragment>
                    <ProductView />
                    <Footer.PropertyView />
                </React.Fragment>
            )
    }
}

export default function App(){
	const {
        setProduct,
        setImgPreview
    } = useContext(Context.AppContext);
    const query = useQuery();
   	const { id } = useParams();

    useEffect(() => {
        ProductService.GetById(id).then(data => {
            setImgPreview(data.images[0]);
            setProduct({...data});
            console.log(data)
        }).catch(err => {
            console.log(err);
        })
    }, [id, setImgPreview, setProduct])

    return getPageContent(query.get('page'));	
}
