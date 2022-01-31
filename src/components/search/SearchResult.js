import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Button } from '../Button';
import './SearchResult.css';
import swal from 'sweetalert2';

function SearchResult(props) {
    const [requestURL, setRequestURL] = useState();
    const [requestMethod, setRequestMethod] = useState();

    const handleAddToCatalogue = (e) => {
        const type = e.target.id;
        if (type === 'collection') {
            setRequestURL(`https://api.discogs.com/users/jesscall/collection/folders/3927115/releases/${props.id}`);
            setRequestMethod("POST");
        } else if (type === 'wishlist') {
            setRequestURL(`https://api.discogs.com/users/jesscall/wants/${props.id}`);
            setRequestMethod("PUT");
        }
    }

    useEffect(() => {
        if(requestURL) {
            fetch(requestURL, {
                method: requestMethod,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization' : 'Discogs token=pcQFSpblZFQJCCrAfoykMDbfAXcqDqeUZMDOrgbb',
                    'Host': 'api.discogs.com'
                }
            }).then(response => {
                if (response.ok) {
                    swal.fire(
                        'Successfully Added!',
                        '',
                        'success'
                    );
                } else {
                    swal.fire(
                        'Hmmm... Something went wrong.',
                        '',
                        'error'
                    );
                }
            });
        }
    }, [requestURL]);

    return (
        <div className='searchResult'>
            <Link to={props.path}>
                <div className='result' key={props.key}>
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
                                buttonSize='btn-small'
                                onClick={handleAddToCatalogue}
                            >
                                Add to Collection
                            </Button>
                            <Button 
                                id='wishlist'
                                className='btns'
                                buttonStyle='btn--secondary'
                                buttonSize='btn-small'
                                onClick={handleAddToCatalogue}
                            >
                                Add to Wishlist
                            </Button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default SearchResult;