import React from 'react';

function Track (props) {

    return (
        <>
            <h1>
                {props.track.position} - {props.track.title}
            </h1>
            
        </>
    );
}

export default Track;