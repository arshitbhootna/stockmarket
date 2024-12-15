import React from 'react';
import "./style.css";

function Pricing() {
    return ( 
        <>
        <div className='pricing'>
            <div className='leftprice'>
              <h4>Unbeatable pricing</h4>
              <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.

</p>
            </div>
            <div className='rightprice'>
                <div className='pricing-box'>
                <img src="../src/images/pricing0.svg"/>
                <p>Free account<br></br>
                opening</p></div>
                <div  className='pricing-box'>
                <img src="../src/images/pricingEquity.svg"/>
                <p>Free equity delivery<br></br>
                and direct mutual funds</p></div>
                <div  className='pricing-box'>
                <img src="../src/images/pricingMF.svg"/>
                <p>Intraday and<br></br>
                F&O</p></div>
                
            </div>
            
        </div>
        </>
     );
}

export default Pricing;