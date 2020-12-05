const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  text: {
    type: String,
  },
});

module.exports = Review = mongoose.model('review', ReviewSchema);
