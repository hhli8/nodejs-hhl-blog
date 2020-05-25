const express = require('express')
const router = express.Router()
const Db = require('../.././database/db.js')
const formidable = require('formidable')
const fs = require('fs')
const path = require('path')

router.post('/uploadimg', function(req, res) {
  var form = new formidable.IncomingForm()
  form.parse(req, function(err, fields, files) {
    let filePath = path.resolve(files.file.path)
    let data = fs.readFileSync(filePath)
    let bufferData = new Buffer(data, 'base64')
    let dirname='public/shop_admin/good/default'
    if(!fs.existsSync(dirname)) {  
      path.dirname(dirname)
      fs.mkdirSync('./' + dirname)
    }
    let id = (new Date()).getTime()
    fs.writeFileSync(`./${dirname}/${id}.png`, bufferData)
    let url = `http://172.32.30.167:3001/shop_admin/good/default/${id}.png`
    res.json({
      code: 200,
      data: {
        url
      }
    })
  })
})

module.exports = router
