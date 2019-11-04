import React, { createContext, useState} from 'react';
export const AppContext = createContext();

export function AppProvider(props){
	const [products, setProduct] = useState([]);

	return (
		<AppContext.Provider value={{
			products, setProduct,
		}}>
			{props.children}
		</AppContext.Provider>
	)
}