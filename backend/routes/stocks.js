const express = require('express');
const Stock = require('../models/Stock');
const authenticateToken = require('../middleware/auth');
const axios = require('axios');

const router = express.Router();

/**
 * WHAT IS THIS FILE?
 * This file handles stock-related operations:
 * - Get all available stocks
 * - Get specific stock details
 * - Fetch live stock data from Polygon API (Phase 4)
 * 
 * Some routes are PUBLIC, some PROTECTED
 */

// ============================================
// ROUTE 1: Get All Stocks
// ============================================
/**
 * GET /api/stocks
 * PURPOSE: Get all stocks available in the platform
 * AUTHENTICATION: Not required (Public)
 * 
 * WHAT HAPPENS:
 * 1. Query all Stock documents from MongoDB
 * 2. Return array of stocks with current prices
 * 
 * RESPONSE:
 * [
 *   {
 *     "_id": "stock_id",
 *     "symbol": "AAPL",
 *     "name": "Apple Inc.",
 *     "currentPrice": 175.50,
 *     "previousClose": 174.80,
 *     "openPrice": 175.00,
 *     "highPrice": 176.25,
 *     "lowPrice": 174.50,
 *     "volume": 45000000,
 *     "peRatio": 28.5,
 *     "lastUpdated": "2024-01-15T14:30:00Z"
 *   },
 *   { ... more stocks ... }
 * ]
 * 
 * LEARNING POINT:
 * This is a PUBLIC route - no authentication needed
 * Anyone can see available stocks
 */
router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// ROUTE 2: Get Single Stock Details
// ============================================
/**
 * GET /api/stocks/:symbol
 * PURPOSE: Get detailed information about a specific stock
 * AUTHENTICATION: Not required (Public)
 * 
 * PARAMETERS:
 * :symbol - Stock symbol (e.g., "AAPL", "GOOGL", "MSFT")
 * 
 * EXAMPLE REQUEST:
 * GET /api/stocks/AAPL
 * 
 * WHAT HAPPENS:
 * 1. Find stock by symbol (converted to uppercase)
 * 2. If found, return stock details
 * 3. If not found, return 404 error
 * 
 * RESPONSE:
 * {
 *   "_id": "stock_id",
 *   "symbol": "AAPL",
 *   "name": "Apple Inc.",
 *   "currentPrice": 175.50,
 *   "volume": 45000000,
 *   ... other stock data
 * }
 * 
 * LEARNING POINT:
 * .toUpperCase() ensures "aapl", "Aapl", "AAPL" all match
 */
router.get('/:symbol', async (req, res) => {
  try {
    // Convert symbol to uppercase for consistency
    const stock = await Stock.findOne({ 
      symbol: req.params.symbol.toUpperCase() 
    });
    
    if (!stock) {
      return res.status(404).json({ error: 'Stock not found' });
    }
    
    res.json(stock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// ROUTE 3: Fetch Stock Data from Polygon API
// ============================================
/**
 * GET /api/stocks/api/fetch/:symbol
 * PURPOSE: Fetch live stock data from Polygon.io API
 * AUTHENTICATION: Required (Protected)
 * 
 * NOTE: URL is a bit unusual with /api/fetch but this separates
 * this route from the previous ones to avoid conflicts
 * 
 * WHAT HAPPENS:
 * 1. User must be authenticated (token required)
 * 2. Fetch data from Polygon API using symbol
 * 3. Store in MongoDB database
 * 4. Return data to frontend
 * 
 * WILL BE IMPLEMENTED IN PHASE 4
 * 
 * LEARNING POINT:
 * authenticateToken middleware runs BEFORE this handler
 * Only logged-in users can fetch live data
 */
router.get('/api/fetch/:symbol', authenticateToken, async (req, res) => {
  try {
    const { symbol } = req.params;
    
    // This will be implemented in Phase 4
    // For now, return placeholder message
    res.json({ 
      message: 'Live stock data fetching will be implemented in Phase 4',
      symbol: symbol.toUpperCase()
    });
    
    /**
     * PHASE 4 IMPLEMENTATION PREVIEW:
     * 
     * const apiKey = process.env.POLYGON_API_KEY;
     * const url = `https://api.polygon.io/v1/last/stocks/${symbol}/quote?apiKey=${apiKey}`;
     * 
     * const response = await axios.get(url);
     * const data = response.data.result;
     * 
     * // Update or create stock in MongoDB
     * let stock = await Stock.findOne({ symbol: symbol.toUpperCase() });
     * if (!stock) {
     *   stock = new Stock({ symbol: symbol.toUpperCase() });
     * }
     * 
     * stock.currentPrice = data.lastQuote.last;
     * stock.volume = data.lastTrade.size;
     * // ... update other fields
     * 
     * await stock.save();
     * res.json(stock);
     */
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
