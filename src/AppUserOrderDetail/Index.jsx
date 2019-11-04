import React from 'react';
import * as Context from './AppContext';
import App from './App';

function Index(){
	return (
		<Context.AppProvider>
			<App />
		</Context.AppProvider>
	)
}
export default Index