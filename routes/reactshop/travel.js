let express = require('express')
let router = express.Router()

router.post('/getTravelList', function(req, res) {
  let pageNum = req.body.pageNum || 1
  let pageSize = req.body.pageSize || 10
  let returnData = []
  for (var i = 0; i < pageSize; i++) {
    returnData.push({
      title: '6月，南京！奥术大师/' + (pageNum - 1) * pageSize + i,
      id: (pageNum - 1) * pageSize + i,
      imgs: ['https://ib11.go2yd.com/image.php?url=0Pc6Q1D8Ok', 'https://ib11.go2yd.com/image.php?url=0Pc6Q16kJz', 'https://ib11.go2yd.com/image.php?url=0Pc6Q16kJz'],
      url: 'https://mb.yidianzixun.com/article/0Pc6Q1wJ'
    })
  }
  res.json({
    code: 200,
    data: returnData
  })
})

module.exports = router
