const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    stocks: [
      {
        stockSymbol: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 0,
        },
        averageBuyPrice: {
          type: Number,
          required: true,
        },
        currentPrice: {
          type: Number,
          default: 0,
        },
        totalValue: {
          type: Number,
          default: 0,
        },
        gainLoss: {
          type: Number,
          default: 0,
        },
        gainLossPercent: {
          type: Number,
          default: 0,
        },
      },
    ],
    totalBalance: {
      type: Number,
      default: 0,
    },
    investedAmount: {
      type: Number,
      default: 0,
    },
    cashAvailable: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Portfolio', portfolioSchema);
