let express = require('express');
let router = express.Router();
const dns = require('dns');

dns.lookup('www.weeksign.com', (err, address, family) => {
  console.log('IP 地址: %j 地址族: IPv%s', address, family);
});
// IP 地址: "192.0.43.8" 地址族: IPv4

router.get('/', function(req, res) {
  //res.json(req.query);
  //res.json({s:'Birds home page'});
  res.json(req.query);
  //res.json({s:req.ip});
  
});
router.post('/abort', function(req, res) {
  //res.json({s:'Birds home page66666'});
  res.json(req.body);
});

module.exports = router;