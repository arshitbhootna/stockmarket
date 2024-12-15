import React from 'react';
import "./Style.css";

function Footer() {
    return ( 
        <>
        <footer id="footer">
  <div class="container">
    <div class="row between main-footer">
      <div class="columns three">
        <div class="footer-logo">
          <img src="/static/images/stockfusion-logo.svg" alt="StockFusion" />
        </div>

        <p class="copyright text-grey">
          © 2024 StockFusion Inc. All rights reserved.
        </p>

        <ul class="social">
          <li>
            <a target="_blank" href="https://twitter.com/stockfusion">
            <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://facebook.com/stockfusion">
            <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://instagram.com/stockfusion">
            <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://linkedin.com/company/stockfusion">
            <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <hr />
        <ul class="social">
          <li>
            <a target="_blank" href="https://youtube.com/stockfusion">
            <i class="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://t.me/stockfusion">
            <i class="fa-brands fa-discord"></i>
            </a>
          </li>
        </ul>
      </div>

      <div class="columns three">
        <ul class="list-style">
          <li class="nav-head">Company</li>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#press">Press & Media</a></li>
          <li><a href="#csr">StockFusion Cares</a></li>
        </ul>
      </div>

      <div class="columns three">
        <ul class="list-style">
          <li class="nav-head">Support</li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#support-portal">Support Portal</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#charges">List of Charges</a></li>
          <li><a href="#downloads">Downloads & Resources</a></li>
          <li><a href="#videos">Videos</a></li>
        </ul>
      </div>

      <div class="columns three">
        <ul class="list-style">
          <li class="nav-head">Account</li>
          <li><a href="#open-account">Open an Account</a></li>
          <li><a href="#fund-transfer">Fund Transfer</a></li>
        </ul>
      </div>
    </div>

    <div class="row smallprint">
      <p>
        StockFusion Inc.: Member of NSE, BSE & MCX. SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through StockFusion Inc. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through StockFusion Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238. Registered Address: StockFusion Inc., 1234 Wall Street, Bengaluru - 560078, Karnataka, India.
      </p>
      <p>
        For any complaints pertaining to securities broking please write to <a href="mailto:complaints@stockfusion.com">complaints@stockfusion.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI.
      </p>
      <p>
        Procedure to file a complaint on <a href="https://scores.sebi.gov.in/" target="_blank">SEBI SCORES</a>: Register on the SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of grievances.
      </p>
      <p>
        <a href="https://smartodr.in/" target="_blank">Smart Online Dispute Resolution</a> | <a href="/resources/smart-odr-info.pdf" target="_blank">Grievances Redressal Mechanism</a>
      </p>
      <p>
        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
      </p>
      <p>
        "Prevent unauthorized transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors."
      </p>
    </div>

    <div class="footer-graveyard-links text-center">
      <ul>
        <li><a href="https://nseindia.com">NSE</a></li>
        <li><a href="https://bseindia.com/">BSE</a></li>
        <li><a href="https://mcxindia.com/">MCX</a></li>
        <li><a href="#terms">Terms & Conditions</a></li>
        <li><a href="#policies">Policies & Procedures</a></li>
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#disclosure">Disclosure</a></li>
        <li><a href="#investor-attention">For Investor's Attention</a></li>
      </ul>
    </div>
  </div>
</footer>

        </>
     );
}

export default Footer;