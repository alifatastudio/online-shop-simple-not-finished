import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider(props){
	const [products, setProducts] = useState([]);

	return (
		<AppContext.Provider value={{
			products, setProducts
		}}>
			{props.children}
		</AppContext.Provider>
	)
}