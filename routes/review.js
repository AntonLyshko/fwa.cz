const express = require('express');
const fs = require('fs');
var path = require('path');
var Review = require('../models/Review');
const router = express.Router();

// Get all
router.get('/', async (req, res) => {
  try {
    const review = await Review.find();
    res.send(review);
  } catch (err) {
    console.log(err);
  }
});

// Post one
router.post('/', async (req, res) => {
  try {
    let review = new Review({ name: req.body.name, text: req.body.text });
    await review.save().then(() => {
      console.log('Review saved');
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
