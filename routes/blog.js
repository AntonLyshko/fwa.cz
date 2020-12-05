const express = require('express');
const fs = require('fs');
var path = require('path');
const router = express.Router();

// Get all info by id
router.get('/:name', async (req, res) => {
  try {
    let name = req.params.name + '.json';
    var jsonPath = path.join(__dirname, '..', 'assets', name);
    let rawdata = fs.readFileSync(jsonPath);
    let data = JSON.parse(rawdata);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
