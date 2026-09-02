const jwt = require('jsonwebtoken');

// This middleware verifies JWT tokens sent by the frontend
// It runs BEFORE each protected route to ensure user is authenticated
const authenticateToken = (req, res, next) => {
  // Get token from Authorization header (format: "Bearer TOKEN")
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extract token after "Bearer "

  // If no token found, deny access
  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  // Verify the token using the JWT secret
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      // Token is invalid or expired
      return res.status(403).json({ error: 'Token is not valid' });
    }
    // Store decoded user info in req.user for use in route handlers
    req.user = user;
    next(); // Continue to next middleware/route handler
  });
};

module.exports = authenticateToken;
