import React from 'react';
import "./style.css";

function Stats() {
    return ( 
        <>
        <div className='stats'>
  <div className='LeftPart'>
    <h2>Trust with Confidence</h2>
    <h4>Customer-First Always</h4>
    <p>
      StockFusion is trusted by over 1.5 crore customers who manage more than ₹4.5 lakh crores in equity investments through the platform. With its robust features and reliability, StockFusion accounts for 15% of the daily retail exchange volumes in India.
    </p>

    <h4>No Spam or Gimmicks</h4>
    <p>
      We believe in providing a clean and clutter-free experience. Our platform offers high-quality apps that prioritize user experience, allowing you to engage at your own pace without gimmicks, spam, gamification, or annoying push notifications.
    </p>

    <h4>The StockFusion Universe</h4>
    <p>
      More than just an app, we offer an entire ecosystem. Our investments in over 30 fintech startups provide you with tailored services specific to your needs, enhancing your financial journey.
    </p>

    <h4>Do Better with Money</h4>
    <p>
      With innovative features like Nudge and Kill Switch, StockFusion goes beyond facilitating transactions. We actively help you make smarter financial decisions and manage your money more effectively.
    </p>
  </div>

  <div className='RightPart'>
    <img src="../src/images/ecosystem.png" alt="Ecosystem" className='image'/>
  </div>
</div>

        </>
     );
}

export default Stats;