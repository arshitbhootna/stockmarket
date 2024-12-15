import React from 'react';
import "./style.css"

function Hero() {
    return ( 
        <div className="hero">
            <h1 className="title">
                We pioneered the discount broking model in India.
                <br />Now, we are breaking ground with our technology.
            </h1>
            <hr />
            <div className="describe ">
                <div className="left ">
                    <p className="about-text">
                        We kick-started operations on the 15th of August, 2010, with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company StockFusion, a combination of "Stock" and "Fusion," symbolizing the integration of innovative solutions in trading.
                    </p>
                    <p className="about-text">
                        Today, our disruptive pricing models and in-house technology have made us a leading stock broker in India.
                    </p>
                    <p className="about-text">
                        Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>
                <div className="right ">
                    <p className="about-text">
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                    </p>
                    <p className="about-text">
                        Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    </p>
                    <p className="about-text">
                        And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
