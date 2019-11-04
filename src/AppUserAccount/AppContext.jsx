import React, { createContext, useState } from 'react';
export const AppContext = createContext();

export function AppProvider(props){
    const [user, setUser] = useState({
        displayName: 'Loading...',
        photoUrl: '', portalCode: '',
        email: '', phone: ''
    })

    return (
        <AppContext.Provider value={{
            user, setUser
        }}>
            {props.children}
        </AppContext.Provider>
    )
}
