import React from 'react';
import "./Style.css";

function OpenAccount() {
    return ( 
        <>
        <div className='openAccount'>
        <h2 className="oc-title">Open a StockFusion account</h2>
       <h5 className="oc-description" >Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</h5>
       <button type="button" className="btn btn-primary oc-button ">Sign Up Now</button>
            
        </div>
        </>
     );
}

export default OpenAccount;