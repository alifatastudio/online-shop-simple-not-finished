import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

function SearchBox(){
    const { 
        searchValues, setSearchValues
    } = useContext(AppContext);
    const history = useHistory();

    const handleChange = name => event => {
        setSearchValues({ ...searchValues, [name]: event.target.value });
    };


    const handleSearch = method => event => {
        if((method === 'KEY_UP') && (event.key === 'Enter')){
            history.push(`/search?name=${searchValues.name}`)
        } else if((method === 'CLICK') && (method !== 'KEY_UP')){
            history.push(`/search?name=${searchValues.name}`)
        }
    }   

    return (
        <div className="search-box">
            <input 
                id="name"
                name="name"
                className="search-text"
                type="text" 
                placeholder="type to search..." 
                onChange={handleChange('name')}
                onKeyUp={handleSearch('KEY_UP')}
            />
            <div
                onClick={handleSearch('CLICK')}
                className="search-btn"
            >
                <SearchIcon />
            </div>
        </div>
    )
}

export default SearchBox;