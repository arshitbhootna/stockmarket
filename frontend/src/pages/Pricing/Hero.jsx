import React from 'react';
import './style.css';

function Hero() {
    return (
        <div className='hero'>
            <h1 className="hero-title">Pricing</h1>
            <p className="hero-description">Free equity investments and flat ₹20 intraday and F&O trades</p>
            <div className='pricing-section'>
                <div className='pricing-card'>
                    <img src='../src/images/pricingEquity.svg' alt='Free equity delivery' className='pricing-image'/>
                    <h2 className='pricing-title'>Free equity delivery</h2>
                    <p className='pricing-description'>
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className='pricing-card'>
                    <img src='../src/images/intradayTrades.svg' alt='Intraday and F&O trades' className='pricing-image'/>
                    <h2 className='pricing-title'>Intraday and F&O trades</h2>
                    <p className='pricing-description'>
                        Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className='pricing-card'>
                    <img src='../src/images/pricingMF.svg' alt='Free direct MF' className='pricing-image'/>
                    <h2 className='pricing-title'>Free direct MF</h2>
                    <p className='pricing-description'>
                        All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
