import React, { createContext, useState} from 'react';
export const AppContext = createContext()

export function AppProvider(props){
	const [order, setOrder] = useState({
		id: 0, quantity: 1, 
		productId: 1, status: '', 
		userId: 1, phone: '', 
		message: '', name: '',
		address: '', 
		product: {
			id: 1, name: 'Asus Vivo Book', 
			price: 11250000,
	        description: "Mulus bergaransi",
	        images: []
		}
	});

	return (
		<AppContext.Provider value={{
			order, setOrder
		}}>
			{props.children}
		</AppContext.Provider>
	)
}