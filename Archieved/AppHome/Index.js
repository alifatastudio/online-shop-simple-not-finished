import React from 'react';
import { AppHomeProvider } from './AppContext';
import App from './App';

function Index(){
    return (
        <AppHomeProvider>
            	<App />
        </AppHomeProvider>
    )
}

export default Index;