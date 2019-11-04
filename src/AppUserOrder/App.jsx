import React, { useEffect, useContext } from 'react';
import * as Context from './AppContext';
import * as OrderService from '../Service/Order';
import OrderView from './OrderView';

export default function App(){
	const { setProduct } = useContext(Context.AppContext);

	useEffect(() => {
		OrderService.GetOrderByUser(1).then(data => {
			setProduct(data);
		}).catch(err => {
			console.log(err);
		})
	}, [setProduct])
	
	return <OrderView />
}