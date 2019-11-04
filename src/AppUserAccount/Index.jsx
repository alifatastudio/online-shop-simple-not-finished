import React from 'react';
import App from './App';
import * as Context from './AppContext';

function Index(){
    return (
        <Context.AppProvider>
        	<App />
        </Context.AppProvider>
    )
}

export default Index;