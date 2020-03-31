var express = require('express');
var router = express.Router();
let Db=require('../.././database/db.js');
var Request = require('request');
import Token from './token';

const P = {
  find: (c, params)=> {
    let p = new Promise(function(resolve, reject){
      c.find(params).toArray((err,doc)=>{
        resolve(doc.length?doc[0]:'');
      });
    });
    return p; 
  },
  
  insert: (c, phone, code)=> { // 添加用户信息
    let p = new Promise(function(resolve, reject){
      let token = Token.createToken({phone:phone},30*24*3600);
      let createId = '0812'+(new Date()).getTime()+phone.slice(-4);
      c.insert({
        phone:phone,token:token,code:code,time:Date.parse(new Date())/1000,
        id: createId
      },function(err,doc){
        if(err){
          throw err;
        }else{
          resolve(token);
        }
      });
    });
    return p; 
  },
  
  set: (c, phone, code)=> { 
    var p = new Promise(function(resolve, reject){
        c.update({phone:phone},{$set: {code:code,time:Date.parse(new Date())/1000}},function(err,doc){
          if(err){
            throw err;
          }else{
            resolve('');
          }
        });
    });
    return p; 
  },
  
  pianyun: function(phone) {
    let p = new Promise(function(resolve, reject){
      let random='';
      for(let i=0;i<6;i++){
          random+=Math.floor(Math.random()*10);
      }
      let text=`【周签网】您的验证码是${random}，此验证码用于注册周签或重置密码。10分钟内有效。`;
      let options = {
          method:'post',
          url: 'https://sms.yunpian.com/v2/sms/single_send.json',
          headers: {
              'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
          },
          form:{
              apikey:'e1fcceaf0f18e7c43e8684eda049909a',
              mobile:phone,
              text:text,
          }
      };
      //resolve({code:'222223',res:{code: 'code10000',data: {suc: true, msg: '发送成功'}}});
      Request(options, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve({code:random,res:{code: 'code10000',data: {suc: true, msg: '发送成功'}}});
        }else if (!error && response.statusCode != 200) {
          resolve({code:random,res:{code: 'code10001',data: {suc: false, msg: '发送失败'}}});
        }else {
          resolve({code:random,res:{code: 'code10002',data: {suc: false, msg: '发送失败'}}});
        }
      });
    });
    return p; 
  },
  
  getCode: (phone, data, res, c, db)=> { // data--查询用户的注册信息
    let p = new Promise(function(resolve, reject){
      // 先查发送是否频繁，正常则统计日次数，否则直接返回异常
      P.pianyun(phone).then((_data)=>{
        if(_data.res.data.suc) {
          if(!data) {
            P.insert(c, phone, _data.code).then((token)=>{
              db.close();
              res.send({code: 'code10000',suc:true,data: {suc: true, msg: '发送成功'}});
            });
          }else {
            P.set(c, phone, _data.code).then((token)=>{
              db.close();
              res.send({code: 'code10000',suc:true,data: {suc: true, msg: '发送成功'}});
            });
          }
        }else {
          db.close();
          res.send(_data.res);
        }
      });
    });
    return p;
  }
}

// 该路由使用的中间件
//router.use(function timeLog(req, res, next) {
////console.log('Time: ', Date.now());
//next();
//});

router.post('/', function(req, res) {
  let data = req.body;
  let response = {};
  
  // 先查询有没有token和有没有失效，有，则新生成，没有，则返回已存在的
  //if(data.code == '222222') {
    Db.mongo.connect(Db.ten, (err,db) => {
      let MhUsers = db.collection('MhUsers');
      MhUsers.find({phone:data.phone}).toArray((err,doc)=>{
        if(err){
          throw err;
        }else{ 
          if(doc.length){
            if(Date.parse(new Date())/1000-doc[0].time>30*60) { // 大于30分钟证码失效
              res.json({
                code: '',
                data: { suc: false, msg: '验证码已过时' },
                suc: false,
                msg: '验证码已过时'
              });
              return;
            }
            if(data.code != doc[0].code) {
              response = {
                code: '',
                data: { suc: false, msg: '验证码有误' },
                suc: false,
                msg: '验证码有误'
              }
              res.json(response);
              return;
            }
            // 检查token有效性，是否替换
            let token; 
            if(doc[0].token && Token.checkToken(doc[0].token)){
              token = doc[0].token;
              response = {
                code: '',
                data: {
                  suc: true, msg: '登录成功', token: token, 
                  userNick: doc[0].userNick?doc[0].userNick:data.phone,
                  care: doc[0].care?doc[0].care:0,
                  cared: doc[0].cared?doc[0].cared:0,
                  headurl: doc[0].headurl?doc[0].headurl:''
                },
                suc: true
              }
              db.close();
              res.send(response);
            }else{
              token = Token.createToken({phone:data.phone},30*24*3600);
              MhUsers.update({phone:data.phone},{$set: {token:token}},function(err,updoc){
                if(err){
                  throw err;
                }else{
                  response = {
                    code: '',
                    data: {
                      suc: true, msg: '登录成功', token: token,
                      userNick: doc[0].userNick?doc[0].userNick:data.phone,
                      care: doc[0].care?doc[0].care:0,
                      cared: doc[0].cared?doc[0].cared:0,
                      headurl: doc[0].headurl?doc[0].headurl:''
                    },
                    suc: true
                  }
                }
                db.close();
                res.send(response);
              });
            }
          }else {
            // 直接插入
            response = {
              code: '',
              data: { suc: false, msg: '验证码有误' }
            }
            res.json(response);
//          P.insert(MhUsers, data.phone).then((out)=> {
//            response = {
//              code: '',
//              data: {
//                suc: true, msg: '登录成功', token: out
//              }
//            }
//            db.close();
//            res.send(response);
//          });
          }
        }
      });
    });
    
//}else {
//  response = {
//    code: '',
//    data: { suc: false, msg: '验证码有误' }
//  }
//  res.json(response);
//}
  // https://www.cnblogs.com/hlere/p/6668159.html  jwt
});

// 测试get方法
//router.get('/getcode', function(req, res) {
//res.json(req.query);
//});

// 获取验证码
router.get('/getcode', function(req, res) {
  let query = req.query;
  
  Db.mongo.connect(Db.ten, (err,db) => {
    let MhUsers = db.collection('MhUsers');
    P.find(MhUsers, {phone:query.phone})
    .then((data)=>{
      return P.getCode(query.phone,data,res,MhUsers,db);
    });
  });
});

module.exports = router;