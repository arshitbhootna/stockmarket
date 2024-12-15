import React from 'react';
import "./style.css"

function Ticket() {
    return ( 
        <>
        <div class="faq-sections faq-content">
    <div class="support-cards-container container">
        <h2>To create a ticket, select a relevant topic</h2>

        <div class="row between">
            <div class="four columns card-block">
                <h5 class="card-title text-muted">
                    <a href="/category/account-opening">
                        <i class="category-icons icon-account-opening"></i>
                        Account Opening
                    </a>
                </h5>
                <span class="text-grey"><a href="/category/account-opening/getting-started">Getting started</a></span>
                <span class="text-grey"><a href="/category/account-opening/online-account-opening">Online</a></span>
                <span class="text-grey"><a href="/category/account-opening/offline-account-opening">Offline</a></span>
                <span class="text-grey"><a href="/category/account-opening/charges-at-zerodha">Charges</a></span>
                <span class="text-grey"><a href="/category/account-opening/company-partnership-and-huf-account-opening">Company, Partnership and HUF</a></span>
                <span class="text-grey"><a href="/category/account-opening/nri-account-opening">Non Resident Indian (NRI)</a></span>
            </div>

            <div class="four columns card-block">
                <h5 class="card-title text-muted">
                    <a href="/category/your-zerodha-account">
                        <i class="category-icons icon-my-account"></i>
                        Your Zerodha Account
                    </a>
                </h5>
                <span class="text-grey"><a href="/category/your-zerodha-account/login-credentials">Login credentials</a></span>
                <span class="text-grey"><a href="/category/your-zerodha-account/your-profile">Your Profile</a></span>
                <span class="text-grey"><a href="/category/your-zerodha-account/account-modification-and-segment-addition">Account modification and segment addition</a></span>
                <span class="text-grey"><a href="/category/your-zerodha-account/dp-id-and-bank-details">CMR & DP ID</a></span>
                <span class="text-grey"><a href="/category/your-zerodha-account/nomination-process">Nomination</a></span>
                <span class="text-grey"><a href="/category/your-zerodha-account/transfer-of-shares-and-conversion-of-shares">Transfer and conversion of shares</a></span>
            </div>

            <div class="four columns card-block">
                <h5 class="card-title text-muted">
                    <a href="/category/trading-and-markets">
                        <i class="category-icons icon-trading-and-platforms"></i>
                        Trading and Markets
                    </a>
                </h5>
                <span class="text-grey"><a href="/category/trading-and-markets/trading-faqs">Trading FAQs</a></span>
                <span class="text-grey"><a href="/category/trading-and-markets/kite-web-and-mobile">Kite</a></span>
                <span class="text-grey"><a href="/category/trading-and-markets/margins">Margins</a></span>
                <span class="text-grey"><a href="/category/trading-and-markets/product-and-order-types">Product and order types</a></span>
                <span class="text-grey"><a href="/category/trading-and-markets/corporate-actions">Corporate actions</a></span>
                <span class="text-grey"><a href="/category/trading-and-markets/kite-features">Kite features</a></span>
            </div>
        </div>

        <div class="row between">
            <div class="four columns card-block">
                <h5 class="card-title text-muted">
                    <a href="/category/funds">
                        <i class="category-icons icon-funds"></i>
                        Funds
                    </a>
                </h5>
                <span class="text-grey"><a href="/category/funds/fund-withdrawal">Fund withdrawal</a></span>
                <span class="text-grey"><a href="/category/funds/adding-funds">Adding funds</a></span>
                <span class="text-grey"><a href="/category/funds/adding-bank-accounts">Adding bank accounts</a></span>
                <span class="text-grey"><a href="/category/funds/mandate">eMandates</a></span>
            </div>

            <div class="four columns card-block">
                <h5 class="card-title text-muted">
                    <a href="/category/console">
                        <i class="category-icons icon-q-backoffice"></i>
                        Console
                    </a>
                </h5>
                <span class="text-grey"><a href="/category/console/ipo">IPO</a></span>
                <span class="text-grey"><a href="/category/console/portfolio">Portfolio</a></span>
                <span class="text-grey"><a href="/category/console/ledger">Funds statement</a></span>
                <span class="text-grey"><a href="/category/console/profile">Profile</a></span>
                <span class="text-grey"><a href="/category/console/reports">Reports</a></span>
                <span class="text-grey"><a href="/category/console/referral-program">Referral program</a></span>
            </div>

            <div class="four columns card-block">
                <h5 class="card-title text-muted">
                    <a href="/category/mutual-funds">
                        <i class="category-icons icon-mutual-funds"></i>
                        Coin
                    </a>
                </h5>
                <span class="text-grey"><a href="/category/mutual-funds/understanding-mutual-funds">Understanding mutual funds and Coin</a></span>
                <span class="text-grey"><a href="/category/mutual-funds/coin-app">Coin app</a></span>
                <span class="text-grey"><a href="/category/mutual-funds/coin-web">Coin web</a></span>
                <span class="text-grey"><a href="/category/mutual-funds/transaction-and-reports">Transactions and reports</a></span>
                <span class="text-grey"><a href="/category/mutual-funds/nps">National Pension Scheme (NPS)</a></span>
            </div>
        </div>
    </div>
</div>

        </>
     );
}

export default Ticket;