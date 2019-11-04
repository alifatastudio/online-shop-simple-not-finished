import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import SearchBox from './SearchBox';
import Link from './NavLink';
import NavMenu from './NavMenu';
import NavAdmin from './NavAdmin';

function App(){
    return (
        <header className="navbar">
            <NavLink to="/" className="nav-brand">
                <h4 className="">LOGO BRAND</h4>
            </NavLink>
            <SearchBox />
            <Link />
            <NavMenu />
        </header>
    )
}

export default App;