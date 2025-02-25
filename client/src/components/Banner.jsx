import React from 'react';
import bannerImage from '../assets/images/banner.webp'; // Adjust the path based on your project structure

const Banner = () => {
    return (
        <div className="banner" style={{ height: '400px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
            <img src={bannerImage} alt="Banner" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
                {/* <h1>Welcome to My Blog</h1>
                <p>Explore the latest articles and insights</p>
            </div> */}
            </div>
        </div>
    );
};

export default Banner;