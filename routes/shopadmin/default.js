let express = require('express')
let router = express.Router()
let Db = require('../.././database/db.js')

router.post('/', function(req, res) {
  let query = req.body
  
  Db.mongo.connect(Db.shop, (err, db) => {
    console.log('链接成功')
    let Goods = db.collection('defaultGoods')
    let good = {
      name: '雨伞1112'
    }
    Goods.insert(good, function(err, doc) {
      db.close()
      res.json({
        code: 200,
        data: [],
        query
      })
    })
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