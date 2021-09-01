import React from 'react';
import Track from './Track';

function TrackList (props) {

    return (
        <>
            {props.tracks.map((track, index) => (
                <Track track={track} key={index}/>
            ))}
        </>
    );

}

export default TrackList;