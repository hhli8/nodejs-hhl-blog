let Db=require('.././database/db.js');
let express = require('express');
let router = express.Router();

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

module.exports = router;