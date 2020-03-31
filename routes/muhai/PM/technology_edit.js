let express = require('express');
let router = express.Router();
let Db = require('../../.././database/db.js');
let fs = require('fs');
let path = require('path');
let P = require('../.././lib/util.js');

router.post('/', function(req, res) {
  let data = req.body;
  let response = {};
  let Token = req.headers.token;
  Db.mongo.connect(Db.ten, (err,db) => {
    let MhTech = db.collection('MhTechnology');
    let MhUsers = db.collection('MhUsers');
    P.find(MhUsers,{token:Token}).then((user) => {
      if(!user) {
        db.close();
        res.send({
          code: '',
          data: '',
          suc: false,
          msg: '未登录'
        });
        return;
      }
      if(data.id) {
        P.update(MhTech, {id: data.id}, {
          title: data.title,
          type: data.type,
          createType: data.createType,
          from: data.from,
          content: data.content // 更新编辑时发布者信息不修改
        }).then((edit) => {
          db.close();
          res.send({
            code: '',
            data: '',
            suc: true,
            msg: ''
          });
        });
      }else {
        let createId = (new Date()).getTime();
        P.insert(MhTech,{
          id: 'tech151600'+createId,
          title: data.title,
          type: data.type,
          createType: data.createType,
          from: data.from,
          content: data.content,
          sender: {
            nick: user.userNick,
            headurl: user.headurl,
            id: user.id
          },
          time: createId
        }).then((save) => {
          db.close();
          res.send({
            code: '',
            data: '',
            suc: true,
            msg: ''
          });
        });
      }
    });
  });
});

router.get('/', function(req, res) {
  let data = req.query;
  let response = {};
  Db.mongo.connect(Db.ten, (err,db) => {
    const MhTech = db.collection('MhTechnology');
    let query = {};
    if (data.type) {
      query.type = data.type;
    }
    P.count(MhTech, query).then((count)=>{
      let TOTAL = count;
      let cur = parseInt(data.page),
          limit = parseInt(data.count?data.count:20);
      let totalPage = Math.ceil(TOTAL/limit);
      let skipNum = (cur-1)*limit; 
      P.limitFind(MhTech, query, skipNum, limit).then((limitFind)=>{
        db.close();
        res.json({
          code: '',
          suc: true,
          data: {
            totalPage: totalPage,
            cur: cur,
            lists: limitFind,
            totalCount: TOTAL
          },
          msg: ''
        });
      });
    });
  });
});

router.get('/detail', (req, res) => {
  let data = req.query;
  let response = {};
  Db.mongo.connect(Db.ten, (err,db) => {
    const MhTech = db.collection('MhTechnology');
    P.find(MhTech, {id:data.id}).then((one) => {
      db.close();
      res.json({
        code: '',
        suc: true,
        data: one,
        msg: ''
      });
    });
  });
});

//router.post('/d', (req, res) => {
//let data = req.body;
//  let OSS = require('ali-oss')
//let client = new OSS({
//    region: 'http://oss-cn-shanghai-internal.aliyuncs.com',
//    accessKeyId: '02tHrZPmtBEzEWqY',
//    accessKeySecret: 'eXmNTOctyDlprsGTYy0gXQgexWZNI0',
//    bucket: 'ranktech'
//})
//async function put () {
//  try {
//    let result = await client.put('name', data.t);
//    console.log(result);
//  } catch (e) {
//    console.log(e);
//  }
//}
//put()
//res.json({
//  code: '',
//  suc: true,
//  data: 'one',
//  msg: ''
//})
//});

module.exports = router;