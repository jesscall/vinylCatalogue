import React, { useState, useEffect } from 'react';
import TrackList from './TrackList';
import './Album.css';

function Album (props) {
    const [title, setTitle] = useState();
    const [artists, setArtists] = useState();
    const [year, setYear] = useState();
    const [tracks, setTracks] = useState([]);
    const [artwork, setArtwork] = useState();
    

    useEffect(() => {
        fetch(`https://api.discogs.com/releases/${props.id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'Discogs token=pcQFSpblZFQJCCrAfoykMDbfAXcqDqeUZMDOrgbb',
                'Host': 'api.discogs.com'
            }
        }).then(response => response.json())
        .then(jsonResponse => {
            setTitle(jsonResponse.title);
            setArtists((jsonResponse.artists.map(artist => artist.name)).join(', '));
            setYear(jsonResponse.year);
            setTracks(jsonResponse.tracklist);
            setArtwork(jsonResponse.images[0].resource_url);

            console.log(jsonResponse);
        });

    }, []);

    return (
        <div 
            className='album'
        >
            <div>
                <img 
                    src={artwork}
                    className='album-cover'
                />
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

export default Album;