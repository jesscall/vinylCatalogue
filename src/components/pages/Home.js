import React from 'react';
import '../../App.css';
import HeroSection from '../LandingSection';
import Cards from '../Cards';

function Home () {
    return (
        <>
            <HeroSection />
            <Cards 
                action="https://api.discogs.com/users/jesscall/collection/folders/0/releases"
                label="Vinyl Collection"
                index="releases"
            />
            <Cards 
                action="https://api.discogs.com/users/jesscall/wants"
                label="Wishlist"
                index="wants"
            />
        </>
    );
}

export default Home;