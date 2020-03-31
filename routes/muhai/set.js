let express = require('express');
let router = express.Router();
let Db = require('../.././database/db.js');
let fs = require('fs');
let path = require('path');

const P = {
  find: (c, params, all) => {
    let p = new Promise(function(resolve, reject){
      c.find(params).toArray((err,doc)=>{
        resolve(doc.length?(all?doc:doc[0]):'');
      });
    });
    return p;
  }
}

// 昵称
router.put('/nickname', function(req, res) {
  let data = req.body;
  let response = {};
  let Token = req.headers.token;
  
  Db.mongo.connect(Db.ten, (err,db) => {
    if(err) {
      throw err;
    }else {
      let MhUsers = db.collection('MhUsers');
      MhUsers.find({token:Token}).toArray(function(err,doc){
        if(err) {
          throw err;
        }else {
          if(doc[0] && !doc[0].userNickHadset) {
            let user = doc[0];
            MhUsers.update({token:Token},{$set: {userNick:data.nick,userNickHadset:true}},function(err,doc){
              db.close();
              if(err) {
                throw err;
                res.json({
                  code: '',
                  data: { suc: false, msg: '昵称修改失败' },
                  suc: false
                });
              }else {
                res.json({
                  code: '',
                  ss: doc,
                  data: { suc: true, msg: '昵称修改成功' },
                  suc: true
                });
                //let MhPMIndexEdit = db.collection('MhPMIndexEdit');
//              MhPMIndexEdit.find({senderid:user.id}).toArray((err,doc)=>{
//                res.send({
//                  data:{
//                    suc:true,
//                    ss:doc
//                  }
//                })
//              });
//              MhPMIndexEdit.update({senderid:user.id},{$set:{mtitle:'将将计就计',sender:{
//                nick: data.nick,
//                headurl: user.headurl,
//                id: user.id
//              }}},(err,doc)=>{
//                res.json({
//                  code: '',
//                  ss: doc,
//                  data: { suc: true, msg: '昵称修改成功' }
//                });
//              });
              }
            });
          }else {
            db.close();
            res.json({
              code: '',
              suc: false,
              msg: '您已设置过昵称'
            });
          }
        }
      });
    }
  });
});

// 昵称是否已设置
router.get('/nickname/ishad', function(req, res) {
  let response = {};
  let Token = req.headers.token;
  
  Db.mongo.connect(Db.ten, (err,db) => {
    if(err) {
      throw err;
    }else {
      let MhUsers = db.collection('MhUsers');
      MhUsers.find({token:Token}).toArray(function(err,doc){
        db.close();
        if(err) {
          throw err;
          res.json({
            code: '',
            data: { suc: false, msg: '查询失败' },
            suc: false
          });
        }else {
          res.json({
            code: '',
            suc: true,
            data: { suc: true, msg: '昵称已修改', ishad:(doc[0] && !doc[0].userNickHadset)?0:1  }
          });
        }
      });
    }
  });
});

// 头像
router.put('/headurl', function(req, res) {
  let data = req.body;
  let response = {};
  let Token = req.headers.token;
  
  let base64 = data.base64.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
  let bitmap = new Buffer(base64, 'base64');
  let dirname='public/MH/headurl';
  if(!fs.existsSync(dirname)) {  
    path.dirname(dirname); 
    fs.mkdirSync('./public/MH/headurl');    
  }
  Db.mongo.connect(Db.ten, (err,db) => {
    if(err) {
      throw err;
    }else {
      //  旧的图片需要删除
      let MhUsers = db.collection('MhUsers');
      
      P.find(MhUsers,{token:Token}).then((MhUsersDoc)=>{
        if(MhUsersDoc && MhUsersDoc.headurl) { // 删除，用异步吧
          fs.unlink('./public/'+MhUsersDoc.headurl, function(err) {
              if (err) {
                throw err;
              }
              //console.log('成功删除了旧图片头像 ');
          });
        }
        let createId = (new Date()).getTime()+data.phone.slice(-4);
        fs.writeFileSync('./public/MH/headurl/'+createId+'.png', bitmap);
        let headUrl = 'MH/headurl/'+createId+'.png';
        MhUsers.update({token:Token},{$set: {headurl:headUrl}},function(err,doc){
          //db.close();
          if(err) {
            db.close();
            throw err;
            res.json({
              code: '',
              data: { suc: false, msg: '头像设置失败' },
              suc: false
            });
          }else {
//          let MhPMIndexEdit = db.collection('MhPMIndexEdit');
//          P.find(MhPMIndexEdit,{
//            senderid: MhUsersDoc.id
////            sender: {
////              nick: MhUsersDoc.userNick,
////              //headurl: MhUsersDoc.headUrl,
////              id: MhUsersDoc.id
////            }
//          },true).then((ress)=>{
//            res.json({
//              code: '',
//              data: { suc: true, msg: '头像设置成功', headurl:headUrl },
//              out: ress
//            });
//          });
            

//          res.json({
//            code: '',
//            data: { suc: true, msg: '头像设置成功', headurl:headUrl }
//          });
            // 注意修改文章编辑的头像url替换
            let MhPMIndexEdit = db.collection('MhPMIndexEdit');
            MhPMIndexEdit.update({senderid: MhUsersDoc.id},{
              $set: {
                sender: {
                  nick: MhUsersDoc.userNick,
                  headurl: headUrl,
                  id: MhUsersDoc.id
                }
              }
            },{multi:true},(err,doc)=>{
              db.close();
              if(err) {
                throw err;
              }else {
                res.json({
                  code: '',
                  suc: true,
                  data: { suc: true, msg: '头像设置成功', headurl:headUrl },
                  ress: doc
                });
              }
            }); 
          }
        });
      });
    }
  });
});

module.exports = router;