const express = require('express');
const authenticateToken = require('../middleware/auth');
const User = require('../models/User');
const Portfolio = require('../models/Portfolio');

const router = express.Router();

/**
 * WHAT IS THIS FILE?
 * This file handles user-related operations that require authentication:
 * - Get user profile
 * - Update user profile
 * - Get user portfolio
 * 
 * All routes here are PROTECTED (require valid JWT token)
 * Token is verified by authenticateToken middleware
 */

// ============================================
// ROUTE 1: Get User Profile
// ============================================
/**
 * GET /api/users/profile
 * PURPOSE: Fetch logged-in user's profile information
 * 
 * HEADERS REQUIRED:
 * Authorization: Bearer <your_jwt_token>
 * 
 * WHAT HAPPENS:
 * 1. authenticateToken middleware verifies JWT token
 * 2. Extracts userId from decoded token
 * 3. Finds user in database by ID
 * 4. Returns user data (excluding password for security)
 * 
 * RESPONSE:
 * {
 *   "_id": "user_id",
 *   "username": "john_doe",
 *   "email": "john@example.com",
 *   "phone": "9876543210",
 *   "investmentCapital": 100000,
 *   "isActive": true,
 *   "createdAt": "2024-01-01T...",
 *   "updatedAt": "2024-01-01T..."
 * }
 */
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    // req.user contains the decoded JWT payload (userId, email)
    const user = await User.findById(req.user.userId).select('-password'); // Exclude password
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// ROUTE 2: Get User Portfolio
// ============================================
/**
 * GET /api/users/portfolio
 * PURPOSE: Get user's stock portfolio and balance information
 * 
 * HEADERS REQUIRED:
 * Authorization: Bearer <your_jwt_token>
 * 
 * WHAT HAPPENS:
 * 1. Find portfolio linked to user's ID
 * 2. If portfolio doesn't exist, create one with initial values
 * 3. Return portfolio with all holdings and cash balance
 * 
 * RESPONSE:
 * {
 *   "_id": "portfolio_id",
 *   "userId": "user_id",
 *   "stocks": [
 *     {
 *       "stockSymbol": "APPLE",
 *       "quantity": 10,
 *       "averageBuyPrice": 150,
 *       "currentPrice": 175,
 *       "totalValue": 1750,
 *       "gainLoss": 250,
 *       "gainLossPercent": 16.67
 *     }
 *   ],
 *   "totalBalance": 100000,
 *   "investedAmount": 1500,
 *   "cashAvailable": 98500
 * }
 */
router.get('/portfolio', authenticateToken, async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne({ userId: req.user.userId });
    
    // If user has no portfolio, create one with default values
    if (!portfolio) {
      portfolio = new Portfolio({
        userId: req.user.userId,
        totalBalance: 100000,
        cashAvailable: 100000,
        stocks: [],
      });
      await portfolio.save();
    }
    
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// ROUTE 3: Update User Profile
// ============================================
/**
 * PUT /api/users/profile
 * PURPOSE: Update user's profile information (username, phone)
 * 
 * HEADERS REQUIRED:
 * Authorization: Bearer <your_jwt_token>
 * 
 * REQUEST BODY:
 * {
 *   "username": "new_username",
 *   "phone": "9876543210"
 * }
 * 
 * WHAT HAPPENS:
 * 1. Authenticate user via JWT
 * 2. Update only username and phone (security: password not updated here)
 * 3. Return updated user data
 * 4. { new: true } returns the updated document
 * 
 * RESPONSE: Updated user object
 */
router.put('/profile', authenticateToken, async (req, res) => {
  try {
    const { username, phone } = req.body;
    
    // Find and update user, return new data
    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { username, phone },
      { new: true } // Returns updated document
    ).select('-password');
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
