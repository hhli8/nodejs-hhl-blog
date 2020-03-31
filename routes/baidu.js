let express = require('express');
let router = express.Router();
const https = require('https');
let qs = require('querystring');

router.get('/token', (req, res) => {
  let param = qs.stringify({
    'grant_type': 'client_credentials',
    'client_id': 'T5r2icQO24HGZa3oAf8kspWG',
    'client_secret': 'czNS7Nj4GseO0bcmRk6rvBOzesspT2C4'
  });
  https.get({
    hostname: 'aip.baidubce.com',
    path: '/oauth/2.0/token?' + param,
    agent: false
  }, (out) => {
    // 可读流转化  参考https://www.runoob.com/nodejs/nodejs-stream.html
    var fs = require("fs");
    var data = '';
    // 创建可读流
    var readerStream = out //fs.createReadStream('input.txt');
    // 设置编码为 utf8。
    readerStream.setEncoding('UTF8');
    // 处理流事件 --> data, end, and error
    readerStream.on('data', function(chunk) {
      data += chunk;
    });
    readerStream.on('end', function(){
      // console.log(data);
      res.send({
        suc: true,
        msg: '',
        data: JSON.parse(data).access_token
      });
    });
    // out.pipe(process.stdout)
  })
});

router.post('/merge', (req, res) => {
  let data = req.body;
  let token = req.headers.token;
  let options = qs.stringify(data);
  let params = qs.stringify({ access_token: token });
  var post_options = {
    host: 'api-cn.faceplusplus.com',
    path: '/imagepp/v1/mergeface?' + params,
    method: 'POST',
    headers: {
      'Content-Type':'application/json;charset=UTF-8'
    },
    agent: false
  };
  var post_req = https.request(post_options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('Response: ' + chunk);
    });
  });
  post_req.write(options);
  post_req.end();
//let options = {
//  method:'post',
//  url: 'https://api-cn.faceplusplus.com/imagepp/v1/mergeface?access_token=' + token,
//  headers: {
//    'Content-Type':'application/json;charset=UTF-8'
//  },
//  data: data,
//  params: {
//    access_token: token
//  }
//}
//Request(options, (error, response, body) => {
//  // console.log(response)
//  res.send({
//    suc: true,
//    msg: '请求成功',
//    data: response
//  })
//})
//     *************
//https.request({
//  method:'post',
//  url: 'https://sms.yunpian.com/v2/sms/single_send.json',
//  headers: {
//      'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
//  },
//  form:{
//      apikey:'e1fcceaf0f18e7c43e8684eda049909a',
//      mobile:phone,
//      text:text,
//  }
//  
//  hostname: 'api-cn.faceplusplus.com',
//  path: '/imagepp/v1/mergeface?access_token=' + token,
//  method: 'POST',
//  agent: false
//}, (out) => {
//  
//})
});

module.exports = router;