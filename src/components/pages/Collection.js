import React from 'react';
import '../../App.css';
import Cards from '../Cards';

function Collection () {
    return (
        <>
            <h1 className='collection'>Collection</h1>
            <Cards 
                action="https://api.discogs.com/users/jesscall/collection/folders/0/releases"
                label=""
                index="releases"
            />
        </>
    );
}

export default Collection;