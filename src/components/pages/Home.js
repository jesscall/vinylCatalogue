import React from 'react';
import '../../App.css';
import HeroSection from '../LandingSection';
import Cards from '../cards/Cards';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../features/collection/collectionSlice';
import { selectWishlist } from '../../features/wishlist/wishlistSlice';

function Home () {
    const collection = useSelector(selectCollection);
    const wishlist = useSelector(selectWishlist);

    return (
        <>
            <HeroSection />
            <Cards 
                items={collection}
                label="Vinyl Collection"
            />
            <Cards 
                items={wishlist}
                label="Wishlist"
            />
        </>
    );
}

export default Home;