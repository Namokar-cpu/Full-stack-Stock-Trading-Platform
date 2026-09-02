# Backend Setup Instructions

## 📋 Prerequisites
- Node.js 14+ installed
- MongoDB Atlas account (free tier: https://www.mongodb.com/cloud/atlas)
- Basic understanding of REST APIs

## 🚀 Quick Start (5 minutes)

### Step 1: Navigate to Backend Folder
```bash
cd backend
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Create .env File
```bash
# Copy the example
cp ../.env.example .env

# Then edit .env and add:
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/stock-trading
JWT_SECRET=your_super_secret_key_12345
NODE_ENV=development
POLYGON_API_KEY=your_key_here
```

**How to get MONGO_URI:**
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create cluster (free tier)
3. Click "Connect" → "Drivers"
4. Copy the connection string
5. Replace `<password>` with your password

### Step 4: Start Server
```bash
# Development (auto-restart on changes):
npm run dev

# Production:
npm start
```

### Step 5: Test Backend
Open browser and visit: `http://localhost:5000/api/health`

You should see:
```json
{
  "message": "Backend is running",
  "status": "OK"
}
```

## 📁 Understanding the Structure

```
backend/
│
├── models/              ← How data looks in MongoDB
│   ├── User.js         (users with login credentials)
│   ├── Stock.js        (stock information)
│   ├── Portfolio.js    (user's holdings)
│   └── Trade.js        (buy/sell history)
│
├── middleware/          ← Functions that run before routes
│   └── auth.js         (JWT token verification)
│
├── routes/              ← API endpoints
│   ├── auth.js         (login/register)
│   ├── users.js        (profile/portfolio)
│   ├── stocks.js       (stock listings)
│   └── trades.js       (buy/sell orders)
│
├── config/              ← Configuration files
│   └── database.js     (MongoDB connection)
│
├── server.js            ← Main entry point
└── package.json         ← Dependencies
```

## 🔌 Testing API Endpoints

Use **Postman** or **Thunder Client** to test:

### 1. Register User
```
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "Pass123!",
  "phone": "9876543210"
}

Response: { "token": "...", "user": {...} }
```

### 2. Login
```
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "Pass123!"
}

Response: { "token": "...", "user": {...} }
```

### 3. Get Profile (requires token)
```
GET http://localhost:5000/api/users/profile
Authorization: Bearer <your_token_here>

Response: { "_id": "...", "username": "...", "email": "..." }
```

### 4. Get Portfolio
```
GET http://localhost:5000/api/users/portfolio
Authorization: Bearer <your_token_here>

Response: { "totalBalance": 100000, "cashAvailable": 100000, "stocks": [] }
```

### 5. Get All Stocks
```
GET http://localhost:5000/api/stocks

Response: [ { "symbol": "AAPL", "name": "Apple", ... }, ... ]
```

### 6. Place Buy Order (requires token)
```
POST http://localhost:5000/api/trades/place
Authorization: Bearer <your_token_here>
Content-Type: application/json

{
  "stockSymbol": "AAPL",
  "type": "BUY",
  "quantity": 10,
  "price": 175.50
}

Response: { "message": "BUY order placed", "trade": {...}, "portfolio": {...} }
```

### 7. Get Trade History
```
GET http://localhost:5000/api/trades/history
Authorization: Bearer <your_token_here>

Response: [ { "type": "BUY", "stockSymbol": "AAPL", ... }, ... ]
```

## 📚 Key Concepts Explained

### What is JWT (JSON Web Token)?
- A secure token sent with each request
- Contains user ID and email (encoded, not encrypted)
- Verified by `middleware/auth.js`
- Expires after 7 days

### What is CORS?
- Allows frontend (different domain) to communicate with backend
- Without it, browser blocks requests
- Configured in `server.js` with `cors()`

### What is MongoDB?
- NoSQL database (stores JSON-like documents)
- Collections = Tables (User, Stock, etc.)
- Documents = Rows (individual user records)

### What is Express?
- Framework for creating APIs
- Handles routes and middleware
- Routes connect URLs to functions

### Request Flow
```
User clicks "Buy AAPL"
      ↓
Frontend sends: POST /api/trades/place + token
      ↓
Backend receives request
      ↓
Middleware verifies token (auth.js)
      ↓
Route handler (trades.js) processes
      ↓
MongoDB updated (portfolio, trade record)
      ↓
Response sent back to frontend
      ↓
Frontend updates UI with results
```

## 🔒 Security Notes

1. **Never commit .env file** - Contains secrets
2. **Passwords are hashed** - bcryptjs auto-hashes before saving
3. **JWT secret is random** - Change in production
4. **CORS whitelist** - In production, specify frontend URL only

## 📖 Learning Path

1. **Day 1:** Understand MongoDB models and data structure
2. **Day 2:** Learn JWT authentication flow
3. **Day 3:** Test all endpoints with Postman
4. **Day 4:** Connect frontend to these APIs

## 🐛 Troubleshooting

### MongoDB Connection Error
- Check MONGO_URI in .env
- Ensure IP whitelist is set to 0.0.0.0/0 in MongoDB Atlas
- Verify password doesn't have special characters (or URL encode them)

### Token Invalid Error
- Ensure token is sent in Authorization header
- Format: `Bearer <token>` (with space)
- Token expires after 7 days

### Port Already in Use
```bash
# Kill process on port 5000
# On Mac/Linux:
lsof -ti:5000 | xargs kill -9

# On Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

## ✅ Phase 1 Complete!

Your backend is now ready! Next steps:
1. Frontend will connect to these APIs
2. User registers → token saved in localStorage
3. Every request includes token in header
4. Backend verifies token before processing

## 📞 Need Help?
- Read PHASE1_GUIDE.md for detailed explanations
- Check each file's comments (/* */ blocks)
- Test endpoints with Postman
