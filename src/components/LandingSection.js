import React from 'react';
import '../App.css';
import { Button } from './Button';
import './LandingSection.css';


function HeroSection() {
    return (
        <div className="hero-container">
            <img className="landing-gif" src="images/vinyl_gif.gif" alt="vinyl" />
            <h1>JESSICA'S RECORD COLLECTION</h1>
            <div className='hero-btns'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                path='/collection'
                >
                VIEW COLLECTION
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                path='/wishlist'
                >
                VIEW WISHLIST
                </Button>
            </div>
        </div>
    );
}

export default HeroSection
