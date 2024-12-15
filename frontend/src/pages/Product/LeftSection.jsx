import React from 'react';
import './style.css'; // Import the CSS file for styling

function LeftSection({imageurl, productName, productdes, trydemo, learnmore, googleplay, appstore}) {
    return ( 
        <div className="left-section">
            <div className="left">
                <img src={imageurl} alt="product image" className="product-image"/>
            </div>
            <div className="right">
                <h2 className="product-name">{productName}</h2>
                <p className="product-description">{productdes}</p>
                <div className="link">
                    <a href={trydemo} className="links">Try Demo</a>
                    <a href={learnmore} >Learn More</a>
                </div>
                <div className="app-badges">
                    <a href={googleplay}>
                        <img src="../src/images/googlePlayBadge.svg" alt="Google Play" className="app-badge"/>
                    </a>
                    <a href={appstore}>
                        <img src="../src/images/appstoreBadge.svg" alt="App Store" className="app-badge"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
