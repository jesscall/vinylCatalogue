import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import './SearchBar.css';
import Result from './Result';

function SearchBar () {
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
        setQuery(`https://api.discogs.com/database/search?type=release&format=album&${queryParams}per_page=5`);
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

    console.log(searchResults);

    return (
        <>
            <div className="searchParams">
                <input id="release_title" placeholder="Album" onChange={handleChange} />
                <input id="artist" placeholder="Artist" onChange={handleChange} />
                <input id="year" placeholder="Year" onChange={handleChange} />
                <input id="catno" placeholder="Catalogue No." onChange={handleChange} />
                <Button 
                    className='btns'
                    onClick={handleSearch}
                    buttonStyle='btn--secondary'
                    buttonSize='btn-medium'
                    path="./search"
                >
                    Search
                </Button>
            </div>
            <div className="searchResults">
                {searchResults && searchResults.map(result => (
                    <Result
                        id={result.id}
                        src={result.cover_image}
                        title={result.title}
                        year={result.year}
                        catNo={result.catno}
                        path={`/discography/${result.id}`}
                    />
                ))}
            </div>
        </>
    );
}

export default SearchBar;