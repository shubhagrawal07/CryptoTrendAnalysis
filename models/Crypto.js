const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  abbreviation: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  articleCount: {
    type: Number,
    default: 0,
    min: 0
  },
  tweetCount: {
    type: Number,
    default: 0,
    min: 0
  },
  image: {
    type: String,
    trim: true
  }
});

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;