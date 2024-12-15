import React from 'react';
import "./style.css";
import {Link} from "react-router-dom";

function Hero() {
    return (
        <>
        <div className="hero">
        <h1>Technology</h1>
        <p>Sleek, modern, and intuitive trading platforms</p>
        <p>Check out our <Link href='#'>investment offerings →</Link></p>
        </div>

        </>
      );
}

export default Hero;