import React, { useEffect, useState } from 'react';
import './Style.css';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import axios from 'axios';

function Navbar() {
  const [cookies, removeCookie] = useCookies([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.token) {
        setIsLoggedIn(false); // No token, user is not logged in
        return;
      }

      try {
        const { data } = await axios.post(
          "http://localhost:3000/verify",  // API route to verify token
          {},
          { withCredentials: true }
        );
        
        // Check if the token is valid
        if (data.status) {
          setIsLoggedIn(true); // User is logged in
        } else {
          removeCookie("token");
          setIsLoggedIn(false); // Invalid token, user not logged in
        }
      } catch (error) {
        console.error("Error verifying user:", error);
        removeCookie("token");
        setIsLoggedIn(false); // Error in verification, treat as not logged in
      }
    };

    verifyUser();
  }, [cookies, removeCookie]);

  const handleLogout = () => {
    removeCookie("token");
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page
  };

  const goToDashboard = () => {
    window.location.href = "http://localhost:5174"; // Redirect to dashboard
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            StockFusion
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbarlinks" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <button className="nav-link" onClick={goToDashboard}>
                      Dashboard
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
