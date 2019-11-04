import React, { useEffect, useContext } from 'react';
import * as Context from './AppContext';
import * as ProductService from '../Service/Product';
import { useQuery } from '../Utils/Router';
import ProductAddEdit from './ProductAddEdit';
import ProductView from './ProductView';

function getPageContent(Resource){
	switch(Resource){
		case 'add':
			return <ProductAddEdit  />
        case 'edit':
            return <ProductAddEdit  />
		default:
			return <ProductView />
	}	
}

export default function App(){
    const { 
        dispatch, 
        setLoading
    } = useContext(Context.AppContext);
    const query = useQuery();

    // populate products
    useEffect(() => {
        ProductService.GetAll().then(data => {
            dispatch({type: 'SET_PRODUCTS', data})
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            console.error(err)
        })
    }, [dispatch, setLoading]);

    // console.log(query.get('id'), query.get('page'))
	return getPageContent(query.get('page'))
}