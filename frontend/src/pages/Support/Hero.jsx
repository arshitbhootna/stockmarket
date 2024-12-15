import React from 'react';
import "./style.css";

function Hero() {
    return ( 
        <>
        <div className='Hero'>
            <div className='h-left'>
                <h3>Support Portal</h3>
                <h2>Search for an answer or browse help topics to create a ticket</h2>
                <input type='text' placeholder='Eg:how i activate my F&O,where is my order getting rejected..'></input>
                <div>
                 <a href='#'>Track account opening</a>
                 <a href='#'>Track segement activation</a>
                 <a href='#'>Intraday margins</a>
                 <a href='#'>Kite user manual</a>
                </div>
            </div>
            <div className='h-right'>
            <a href='#'><h4>Track Tickets</h4></a>
            <h2>Featured</h2>
           <p><a href='#'>Surveillance measure on scrips - August 2024</a></p> 
            <p><a href='#'>Latest Intraday leverages and Square-off timings</a></p> 
            </div>
        </div>
        </>
     );
}

export default Hero;