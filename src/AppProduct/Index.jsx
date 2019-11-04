import React from 'react';
import App from './App';
import * as Context from './AppContext';

export default function Index(){
	return (
		<Context.AppProvider>
			<App />
		</Context.AppProvider>
	)	
}