import React, { useState, useEffect } from 'react';
import TrackList from './TrackList';
import { Button } from '../Button';
import './Album.css';
import { discogs } from '../../api/discogs';

function Album (props) {
    const [title, setTitle] = useState();
    const [artists, setArtists] = useState();
    const [year, setYear] = useState();
    const [tracks, setTracks] = useState([]);
    const [artwork, setArtwork] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    

    useEffect(() => {
        if (props.id) {
            discogs.fetchRelease(props.id)
            .then(jsonResponse => {
                setTitle(jsonResponse.title);
                setArtists((jsonResponse.artists.map(artist => artist.name)).join(', '));
                setYear(jsonResponse.year);
                setTracks(jsonResponse.tracklist);
                setArtwork(jsonResponse.images[0].resource_url);
                setIsLoaded(true);
            });
        }
    }, []);

    if (!isLoaded) {
        return <img className='loading' src='images/loading.gif' alt='loading' />;
    } else {
        return (
            <div 
                className='album'
            >
                <div>
                    <img 
                        src={artwork}
                        className='album-cover'
                        alt='album cover'
                    />
                    <div className='btn--container'>
                        <Button 
                            id='collection'
                            className='btns'
                            buttonStyle='btn--secondary--outline'
                            buttonSize='btn--long'
                        >
                            Add to Collection
                        </Button>
                        <Button 
                            id='wishlist'
                            className='btns'
                            buttonStyle='btn--secondary--outline'
                            buttonSize='btn--long'
                        >
                            Add to Wishlist
                        </Button>
                    </div>
                </div>
                <div className='album-details'>
                    <h1 className='album-title'>{title}</h1>
                    <h1 className='album-artist'>{artists}</h1>
                    <h3 className='album-year'>{year}</h3>
                    <br />
                    <TrackList 
                        tracks={tracks}
                    />
                </div>
            </div>
        );
    }
}

export default Album;