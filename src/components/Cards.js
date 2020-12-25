import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Vinyl Collection!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/albertking.jpeg"
                        text="Born Under A Bad Sign by Albert King"
                        label="Blues"
                        path="/"
                        />

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
