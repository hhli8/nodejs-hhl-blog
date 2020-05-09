let express = require('express')
let router = express.Router()
const common = require('../common.js')

router.get('/banner', function(req, res) {
  res.json({
    code: 200,
    data: [
      { src: common.baseUrlPic + '/banner/O1CN01NGgEP81YQJg1iEqmJ_!!127703053.jpg_640x640q80_.webp', code: 123, url: 'http://172.32.30.167:8080/shop/detail/11/taobao?x=997' },
      { src: common.baseUrlPic + '/banner/O1CN01OnbuAW1YQJg2yCTkF_!!127703053.jpg_640x640q80_.webp', code: 1234, url: 'http://172.32.30.167:8080/shop/detail/11/taobao?x=998' },
      { src: common.baseUrlPic + '/banner/O1CN01OwyhEO1YQJhHbFKmb_!!127703053.jpg_640x640q80_.webp', code: 1235, url: 'http://172.32.30.167:8080/shop/detail/11/taobao?x=999' }
    ]
  })
})

router.get('/goodslist', function(req, res) {
  let query = req.query
  let total = 88
  let s = query.size * (query.page - 1) + 1
  let e = query.size * query.page
  let list = []
  if (s <= total) {
    for(var i = s; i <= e; i++) {
      if (i <= total) list.push(i)
    }
  }
  res.json({
    code: 200,
    data: {
      total,
      page: query.page,
      size: query.size,
      list
    },
    query,
    s,
    e
  })
})

module.exports = router
