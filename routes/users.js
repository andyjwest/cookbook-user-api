var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    name: 'Andy',
    id: 1
  });
});

module.exports = router;
