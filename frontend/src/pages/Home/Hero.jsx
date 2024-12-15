import React from 'react';
import "./style.css";

function Hero() {
    return ( 
        <>
        <div className='hero'>
       <img src='../src/images/homeHero.png' alt='HeroImage' className="hero-image" />
       <h1 className="hero-title">Invest in everything</h1>
       <h5 className="hero-description" >Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h5>
       <button type="button" className="btn btn-primary hero-button">Sign Up Now</button>
        </div>
        </>
     );
}

export default Hero;