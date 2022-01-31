import React from 'react';

function Track (props) {

    return (
        <>
            <p>
                {props.track.position} - {props.track.title}
            </p>
            
        </>
    );
}

export default Track;