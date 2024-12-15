const express = require("express");
const router = express.Router();
const { User } = require("../models/Users");
require("dotenv").config();
const jwt = require("jsonwebtoken");

router.get("/profile", async (req, res) => {
  try {
    const token = req.cookies.token; // Extract token from cookies
    console.log("Received token:", token);
    
    if (!token) {
      return res.status(401).json({ status: false, message: "No token provided" });
    }

    // Verify the token
    jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
      if (err) {
        console.error("Token verification error:", err);
        return res.status(401).json({ status: false, message: "Invalid token" });
      }

      console.log("Decoded token:", decoded);

      // Find the user by ID
      const user = await User.findById(decoded.id);
      console.log("Found user:", user);

      if (!user) {
        return res.status(404).json({ status: false, message: "User not found" });
      }

      // Respond with the user profile details
      res.json({
        status: true,
        user: {
          id: user._id,
          email: user.email,
          username: user.username,
          holdings:user.holdings,
          positions:user.positions,
          orders:user.orders
          // Include other necessary details
        }
      });
    });
    
  } catch (error) {
    console.error("Error in profile route:", error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
});

module.exports = router;