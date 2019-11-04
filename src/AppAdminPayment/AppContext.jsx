import React, { createContext, useState, useReducer} from 'react';
import * as Reducer from './AppReducer';
export const AppContext = createContext();

export function AppProvider(props){
	const [payments, dispatch] = useReducer(Reducer.Payments, []);
	const [loading, setLoading] = useState(true);
	const [dialogDelete, setDialogDelete] = useState({
		isOpen: false, id: ''
	})

	return (
		<AppContext.Provider value={{
			payments, dispatch,
			loading, setLoading,
			dialogDelete, setDialogDelete
		}}>
			{props.children}
		</AppContext.Provider>
	)
}