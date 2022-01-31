import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

function Search () {
    const [searchParams, setSearchParams] = useState({});
    const [query, setQuery] = useState();
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = ({ target }) => {
        setSearchParams(prevParams => {
            return {
                ...prevParams, 
                [target.id]: target.value
            };
        });
    }

    const handleSearch = (e) => {
        let queryParams = '';
        for (const [param, value] of Object.entries(searchParams)) {
            if (value) {
                queryParams += `${param}=${encodeURIComponent(value)}&`;
            }
        }
        setQuery(`https://api.discogs.com/database/search?type=release&format=vinyl&${queryParams}per_page=5`);
    }

    useEffect(() => {
        if (query) {
            fetch(query, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization' : 'Discogs token=pcQFSpblZFQJCCrAfoykMDbfAXcqDqeUZMDOrgbb',
                    'Host': 'api.discogs.com'
                }
            }).then(response => response.json())
            .then(jsonResponse => setSearchResults(jsonResponse.results));
        }
    }, [query]);

    return (
        <>
            <SearchBar 
                handleChange={handleChange}
                handleSearch={handleSearch}
            />
            {searchResults && searchResults.map(result => (
                <SearchResult
                    id={result.id}
                    key={result.id}
                    src={result.cover_image}
                    title={result.title}
                    year={result.year}
                    catNo={result.catno}
                    path={`/discography/${result.id}`}
                />
            ))}
        </>
    );
}

export default Search;