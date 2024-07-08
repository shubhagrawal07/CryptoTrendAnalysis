const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    source: {
        type: String,
    },
  title: {
    type: String,
    required: true,
    trim: true
  },
  url: {
    type: String,
    required: true,
    trim: true
  },
  summary: {
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

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
