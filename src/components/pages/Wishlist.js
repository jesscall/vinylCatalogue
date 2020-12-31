import React from 'react';
import '../../App.css';
import Cards from '../Cards';

function Wishlist () {
    return (
        <>
            <h1 className='wishlist'>Wishlist</h1>
            <Cards 
                action="https://api.discogs.com/users/jesscall/wants"
                label=""
                index="wants"
            />
        </>
    );
}

export default Wishlist;