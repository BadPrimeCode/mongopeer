var express = require('express');
var router = express.Router();
var path = require('path');


// resolve to path
router.get('/', function(req, res){
  res.sendFile(path.resolve('public/index.html'));
});

module.exports = router;
