import React, { useEffect, useState } from 'react';
import '../../App.css';
import Cards from '../../components/cards/Cards';
import { useSelector } from 'react-redux';
import { selectWishlist, selectStatus } from './wishlistSlice';

function Wishlist () {
    const [isLoaded, setIsLoaded] = useState(false);
    const wishlist = useSelector(selectWishlist);
    const status = useSelector(selectStatus);

    useEffect(() => {
        if (status === 'success') {
            setIsLoaded(true);
        }
    }, [status]);

    return (
        <>
            <h1 className='wishlist'>Wishlist</h1>
            {isLoaded ? 
                <Cards 
                    items={wishlist}
                    label=""
                /> 
            :  
                <img className='loading' src='images/loading.gif' alt='loading'/>
            }
        </>
    );
}

export default Wishlist;