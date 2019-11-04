import React from 'react';
import App from './App';
import { AppProductProvider } from './AppContext';

function Index(props){

    return(
        <AppProductProvider>
            <div className="container">
                <App {...props}  />
            </div>
        </AppProductProvider>
    )
}

export default Index;