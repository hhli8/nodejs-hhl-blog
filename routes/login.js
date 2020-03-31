let Db=require('.././database/db.js');
let express = require('express');
let router = express.Router();
var request = require('request');

router.get('/', function(req, res) {
  let response;
  Db.mongo.connect(Db.ten, function(err,db){
    console.log('链接成功');
    let Users=db.collection('person');
    Users.find({name:'jack'}).toArray(function(err,doc){
      if(doc.length){
        response={'suc':true,'res':doc[0],msg:'成功'};
      }else{
        response={'suc':false,'msg':'账号或密码有误'};
      }
      db.close();
      res.json(response);
    });
    //res.json(response); //此处不行
  });
});

router.post('/abort', function(req, res) {
  res.json(req.body);
});

router.get('/quickLoginCode', function(req, res) {
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
          mobile:req.query.phone,
          text:text,
      }
  };
  request(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      Db.mongo.connect(Db.ten, (err,db) => {
        if(error){
          throw error;
        }else{
          let CODES=db.collection('codes');
          
        }
      });
      res.json({suc:true,msg:'ok'});
    }else if (!error && response.statusCode != 200) {
      res.json({suc:false,msg:'网络请求失败'});
    }else {
      res.json({suc:false,msg:'第三方调取失败'});
    }
  });
  
});

router.get('/quickLogin', function(req, res) {
  Db.mongo.connect(Db.ten, (error,db) => {
    if(error){
      throw error;
    }else{
      let CODES=db.collection('codes');
      let insertCode={
        phone:req.query.phone,
        code:'234567',
        time:new Date().getTime()
      };
//    CODES.insert(insertCode, (err,doc)=>{
//      if(err){
//        throw err;
//        response={suc:false,msg:'数据库出错'};
//      }else{
//        res.json(insertCode);
//      }
//    });
      CODES.update(insertCode, (err,doc)=>{
        if(err){
          throw err;
          response={suc:false,msg:'数据库出错'};
        }else{
          res.json(insertCode);
        }
      });
    }
  });
  //res.json(req.query);
});

module.exports = router;