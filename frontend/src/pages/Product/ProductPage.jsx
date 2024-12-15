import React from 'react';
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function ProductPage() {
    return (  
        <>
        <Hero/>
        <LeftSection
         imageurl="../src/images/kite.png"
         productName="Kite"
        productdes="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices"
        trydemo=""
         learnmore=""
         googleplay=""
         appstore=""
         
        />
        <RightSection       
imageurl="../src/images/console.png"
productName="Console"
productdes="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
trydemo=""
learnmore=""
googleplay=""
appstore=""
        />
        <LeftSection
         imageurl="../src/images/coin.png"
         productName="Coin"
        productdes="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        trydemo=""
         learnmore=""
         googleplay=""
         appstore=""
         
        />
        <RightSection
        imageurl="../src/images/kiteconnect.png"
        productName="Kite Connect API"
       productdes="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
       trydemo=""
        learnmore=""
        googleplay=""
        appstore=""
        />
        <LeftSection
         imageurl="../src/images/varsity.png"
         productName="Varsity mobile"
        productdes="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        trydemo=""
         learnmore=""
         googleplay=""
         appstore=""
         
        />
        <Universe/>
        </>
    );
}

export default ProductPage;

