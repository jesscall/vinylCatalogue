import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCollection, selectStatus } from './collectionSlice';
import '../../App.css';
import Cards from '../../components/cards/Cards';

function Collection () { 
    const [isLoaded, setIsLoaded] = useState(false);
    const collection = useSelector(selectCollection);
    const status = useSelector(selectStatus);

    useEffect(() => {
        if (status === 'success') {
            setIsLoaded(true);
        }
    }, [status]);

    return (
        <>
            <h1 className='collection'>Collection</h1>
            {isLoaded ? 
                <Cards 
                    items={collection}
                    label=""
                /> 
            :  
                <img className='loading' src='images/loading.gif' alt='loading'/>
            }
        </>
    );
}

export default Collection;