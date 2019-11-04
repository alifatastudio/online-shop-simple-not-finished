import React, {useContext, useEffect} from 'react';
import './App.css';
import { AppProductContext } from './AppContext';
import { useQuery } from '../Utils/Router';
import * as ProductService from '../Service/Product';
import ProductView from './ProductView';
import ProductBuy from './ProductBuy';
import {PropertyBuy, PropertyView} from './ProductProperty';

function getPageContent(Resource){
    switch(Resource){
        case 'buy':
            return (
                <React.Fragment>
                    <ProductBuy />
                    <PropertyBuy />
                </React.Fragment>
            )
        default:
            return (
                <React.Fragment>
                    <ProductView />
                    <PropertyView />
                </React.Fragment>
            )
    }
}

function App({match}){
    const {
        setProduct,
        setImgPreview
    } = useContext(AppProductContext);
    const query = useQuery();
   
    useEffect(() => {
        ProductService.GetById(match.params.id).then(data => {
            setImgPreview(data.images[0]);
            setProduct({...data});
        }).catch(err => {
            console.log(err);
        })
    }, [match.params.id, setImgPreview, setProduct])

    return getPageContent(query.get('page'));
        
}

export default App;