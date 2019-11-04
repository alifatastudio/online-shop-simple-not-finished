import React, {createContext, useState, useReducer } from 'react';
import * as Reducer from './AppReducer';

export const AppContext = createContext();

export function AppProvider(props){
	const [products, dispatch] = useReducer(Reducer.Products, []);
	const [loading, setLoading] = useState(true);
	const [dialogDelete, setDialogDelete] = useState({
		isOpen: false, id: ''
	})

	return (
		<AppContext.Provider value={{
			products, dispatch,
			loading, setLoading,
			dialogDelete, setDialogDelete
		}}>
			{props.children}
		</AppContext.Provider>
	)
}