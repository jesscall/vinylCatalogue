import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className="hero-container">
            <img src="videos/vinyl_gif.gif" />
            <h1>JESSICA'S RECORD COLLECTION</h1>
            <div className='hero-btns'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                VIEW COLLECTION
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                VIEW WISHLIST
                </Button>
            </div>
        </div>
    );
}

export default HeroSection
