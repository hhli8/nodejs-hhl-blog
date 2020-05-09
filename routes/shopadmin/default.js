let express = require('express')
let router = express.Router()

router.post('/', function(req, res) {
  let query = req.body
  res.json({
    code: 200,
    data: [],
    query
  })
})

router.put('/', function(req, res) {
  res.json({
    code: 200,
    data: [],
    req
  })
})


module.exports = router