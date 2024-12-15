import React from 'react';

function Universe() {
    return ( 
        <>
       <div className='universe'>
        <h2>Want to know more about our technology stack? Check out the StockFusion.tech blog.</h2>
        <h1>The StockFusion Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
        <div className='image'>
            <div className='img'>
                <img src="../src/images/smallcaseLogo.png"/>
            </div>
            <div className='img'>
            <img src="../src/images/streakLogo.png"/>
            </div>
            <div className='img'>
            <img src="../src/images/sensibullLogo.svg"/>
            </div>
            <div className='img'>
            <img src="../src/images/zerodhaFundhouse.png"/>
            </div>
            <div className='img'>
            <img src="../src/images/dittoLogo.png"/>
            </div>
            <div className='img'>
            <img src="../src/images/goldenpiLogo.png"/>
            </div>
        </div>
        <button type="button" class="btn btn-primary unv-button ">Sign Up Now</button>
       </div>
        </>
     );
}

export default Universe;