const mongoose = require('mongoose');

const userScheme = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  aga: {
    type: Number,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('user', userScheme);
