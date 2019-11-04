import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery(){
    return new URLSearchParams(useLocation().search)
}

function App(){
    let query = useQuery();

    return (
        <p>Search page {query.get('name')}</p>
    )
}

export default App;