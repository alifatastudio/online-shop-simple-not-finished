import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider(props){
    const [login, setLogin] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [searchValues, setSearchValues] = useState({
        name: ''
    });
    const [openSnackbar, setOpenSnackbar] = useState({
        isOpen: false, message: ''
    });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <AppContext.Provider value={{
            login, setLogin,
            admin, setAdmin,
            mobileOpen, setMobileOpen, handleDrawerToggle,
            searchValues, setSearchValues,
            openSnackbar, setOpenSnackbar
        }} >
            {props.children}
        </AppContext.Provider>
    )
}