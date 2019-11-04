import React, {createContext, useReducer} from 'react';
import { ReducerProducts } from './AppReducer';
export const AppHomeContext = createContext();

export function AppHomeProvider(props){
    const [products, dispatch] = useReducer(ReducerProducts, []);

    return (
        <AppHomeContext.Provider value={{
            products, dispatch
        }}>
            {props.children}
        </AppHomeContext.Provider>
    )
}