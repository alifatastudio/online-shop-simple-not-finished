import React, { useContext, useEffect } from 'react';
import * as Context from './AppContext';

export default function App(){
	const { orders, setOrders } = useContext(Context.AppContext)

	return (
		<React.Fragment>
			<div>
				<h2>Status Order</h2>
			</div>
			<div>
				<h2>Orders</h2>
			</div>
		</React.Fragment>
	)
}