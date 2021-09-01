import React from 'react';
import '../../App.css';
import SearchBar from '../search/SearchBar';
import SearchResults from '../search/SearchResults';

function Search () {
    return (
        <>
            <h1 className='search'>Search</h1>
            <SearchBar />
            <SearchResults />
        </>
    );
}
export default Search