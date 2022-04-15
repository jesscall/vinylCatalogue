import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Button } from '../Button';
import './SearchResult.css';
import swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { addToCollection, deleteFromCollection, selectCollectionItemFromID } from '../../features/collection/collectionSlice';
import { addToWishlist, deleteFromWishlist, selectWishlistItemFromID } from '../../features/wishlist/wishlistSlice';

function SearchResult(props) {
    const dispatch = useDispatch();
    const collectionItem = useSelector((state) => selectCollectionItemFromID(state, props.id));
    const [resultIsInCollection, setResultIsInCollection] = useState(collectionItem !== undefined ? true : false);
    const wishlistItem = useSelector((state) => selectWishlistItemFromID(state, props.id));
    const [resultIsInWishlist, setResultIsInWishlist] = useState(wishlistItem !== undefined ? true : false);

    const toggleCatalogue = (e) => {
        const type = e.target.id;
        if (type === 'collection') {
            // toggle 
            if (!resultIsInCollection) {
                dispatch(addToCollection(props.id))
                .then(new swal('Added to Collection!', '', 'success'));
            } else {
                dispatch(deleteFromCollection(collectionItem))
                .then(new swal('Deleted from Collection!', '', 'success'));
            }
            setResultIsInCollection(!resultIsInCollection);
        } else if (type === 'wishlist') {
            // toggle 
            if (!resultIsInWishlist) {
                dispatch(addToWishlist(props.id))
                .then(new swal('Added to Wishlist!', '', 'success'));
            } else {
                dispatch(deleteFromWishlist(props.id))
                .then(new swal('Deleted from Wishlist!', '', 'success'));
            }
            setResultIsInWishlist(!resultIsInWishlist);
        }
    }

    return (
        <div className='searchResult'>
            <Link to={props.path}>
                <div className='result' key={props.id}>
                    <img src={props.src} className='result-graphic' alt='Album Cover'/>
                    <div className='result-info-wrap'>
                        <div className='result-info'>
                            <h2>{props.title}</h2>
                            <h3>{props.year}</h3>
                            <h5>CatNo. {props.catNo}</h5>
                        </div>
                        <div className='btn-container'>
                            <Button 
                                id='collection'
                                className='btns'
                                buttonStyle='btn--secondary'
                                buttonSize='btn--medium'
                                onClick={toggleCatalogue}
                            >
                                {resultIsInCollection ? 'Remove from Collection' : 'Add to Collection'}
                            </Button>
                            <Button 
                                id='wishlist'
                                className='btns'
                                buttonStyle='btn--secondary'
                                buttonSize='btn--medium'
                                onClick={toggleCatalogue}
                            >
                                {resultIsInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                            </Button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default SearchResult;