let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
  //res.json(req.query);
  //res.json({s:'Birds home page'});
  res.json(req.query);
  
});
router.post('/abort', function(req, res) {
  //res.json({s:'Birds home page66666'});
  res.json(req.body);
});

module.exports = router;