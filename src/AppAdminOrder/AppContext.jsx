import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider(props){
	const [orders, setOrders ] = useState([]);

	return (
		<AppContext.Provider value={{
			orders, setOrders
		}}>
			{props.children}
		</AppContext.Provider>
	)
}