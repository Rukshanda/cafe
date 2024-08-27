import React from 'react';
import gal1 from '../images/coffee-gal-1.jpg'
import gal2 from '../images/coffee-gal-2.jpg'
import gal3 from '../images/coffee-gal-3.png'
import gal4 from '../images/coffee-gal-4.png'
import gal5 from '../images/coffee-gal-5.jpg'
const CoffeeGallery = () => {
    return (
        <div className="gallery-container">
            <div className="gallery-item">
                <img src={gal2} alt="Coffee 1" />
            </div>
            <div className="gallery-item large">
                <img src={gal1} alt="Coffee 2" />
            </div>
            <div className="gallery-item">
                <img src={gal3} alt="Coffee 3" />
            </div>
            <div className="gallery-item">
                <img src={gal4} alt="Coffee 4" />
            </div>
            <div className="gallery-item">
                <img src={gal5} alt="Coffee 5" />
            </div>
        </div>
    );
};

export default CoffeeGallery;
