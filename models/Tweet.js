const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  accountName: {
    type: String,
    required: true,
    trim: true
  },
  url: {
    type: String,
    required: true,
    trim: true
  },
  post: {
    type: String,
    required: true,
    trim: true
  },
  cryptos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Crypto'
  }],
  createdDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
