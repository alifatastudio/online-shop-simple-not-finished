import React from 'react';
import * as Context from './AppContext';
import App from './App';

export default function Index(){
	return (
		<Context.AppProvider>
			<App />
		</Context.AppProvider>
	)
}