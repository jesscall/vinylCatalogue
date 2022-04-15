import React from 'react';
import { Button } from '../Button';
import './SearchBar.css';

function SearchBar (props) {
    return (
        <>
            <div className='searchParams'>
                <input id='release_title' placeholder='Album' onChange={props.handleChange} />
                <input id='artist' placeholder='Artist' onChange={props.handleChange} />
                <input id='year' placeholder='Year' onChange={props.handleChange} />
                <input id='catno' placeholder='Catalogue No.' onChange={props.handleChange} />
                <Button 
                    className='btns'
                    onClick={props.handleSearch}
                    buttonStyle='btn--secondary'
                    buttonSize='btn-medium'
                    path='./search'
                >
                    Search
                </Button>
            </div>
        </>
    );
}

export default SearchBar;