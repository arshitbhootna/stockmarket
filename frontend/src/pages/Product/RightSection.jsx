import React from 'react';
import "./style.css"

function RightSection({imageurl, productName, productdes, trydemo, learnmore, googleplay, appstore}) {
    return ( 
        <div className="right-section">
            <div className="content-left">
                <h2 className="product-name">{productName}</h2>
                <p className="product-description">{productdes}</p>
                <div className="links">
                    <a href={trydemo} className="link">Try Demo</a>
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
            <div className="image-right">
                <img src={imageurl} alt="product image" className="product-image"/>
            </div>
        </div>
    );
}

export default RightSection;
