
import React, { useContext, useEffect } from 'react';
import * as Context from './AppContext';
import * as PaymentService from '../Service/Payment';
import { useQuery } from '../Utils/Router';
import PaymentView from './PaymentView';
import PaymentAddEdit from './PaymentAddEdit';

function getPageContent(Resource){
	switch(Resource){
		case 'edit':
			return <PaymentAddEdit />
		case 'add':
			return <PaymentAddEdit />
		default:
			return <PaymentView />
	}
}

export default function App(){
	const { dispatch, setLoading } = useContext(Context.AppContext);
	const query = useQuery();

	useEffect(()=> {
		PaymentService.GetAll().then(data => {
			dispatch({type: 'SET_DATA', data})
			setLoading(false);
		}).catch(err => {
			console.log(err);
			setLoading(false);
		})
	}, [dispatch, setLoading])

	return getPageContent(query.get('page'));
}