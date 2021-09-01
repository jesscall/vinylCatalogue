import React from 'react';
import './Result.css';

function Result(props) {
    return (
        <div className="result" key={props.id}>
            <img src={props.src} />
            <div>
                <h2>{props.title}</h2>
                <h3>{props.year}</h3>
                <h5>CatNo. {props.catNo}</h5>
            </div>
        </div>
    );
}

export default Result;