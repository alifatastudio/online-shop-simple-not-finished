import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as Context from './AppContext';

ReactDOM.render(
    <BrowserRouter>
        <Context.AppProvider>
            <App />
        </Context.AppProvider>
    </BrowserRouter>, 
    document.getElementById('root')
);