import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import BrandBar from '../components/BrandBar';
import Testimonials from '../components/Testimonials';
import Products from '../components/Products';
 import Loader from '../components/Loader';
import CoffeeGallery from '../components/CoffeeGallery';
import Blog from '../components/Blog';


function HomePage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading with a timeout (replace this with actual data fetching)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }, []);

    if (loading) {
        return <Loader/>;
    }

    return (
        <>
            <Banner />
            <About />
            <div className="borderBottom"></div>
            <BrandBar />
            <div className="borderBottom"></div>
            <Testimonials />
            <Products />
            <CoffeeGallery />
            <Blog/>
        </>
    );
}

export default HomePage;
