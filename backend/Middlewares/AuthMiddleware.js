const { User } = require("../models/Users");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    // Extract token from cookies
    const token = req.cookies.token;
    
    // Check if token is present
    if (!token) {
      return res.status(401).json({ status: false, message: "No token provided" });
    }

    // Verify the token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.TOKEN_KEY);
    } catch (err) {
      console.error("JWT verification error:", err.message);
      return res.status(401).json({ status: false, message: "Invalid or expired token" });
    }

    // Find the user by ID
    const user = await User.findById(decoded.id);

    // Check if user exists
    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    // If user exists, respond with success and user info
    return res.status(200).json({ status: true, user: user.username });

  } catch (error) {
    console.error("Error in userVerification:", error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
