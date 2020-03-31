let express = require('express');
let router = express.Router();
let Db = require('../../.././database/db.js');
let fs = require('fs');
let path = require('path');
let Util = require('../.././lib/util.js');

const P = {
  find: (c, params) => {
    let p = new Promise(function(resolve, reject){
      c.find(params).toArray((err,doc)=>{
        if(err) {
          throw err;
        }else {
          resolve(doc.length?doc[0]:'');
        }
      });
    });
    return p;
  },
  
  insert: () => {
    
  },
  
  count: (c, params) => {
    let p = new Promise(function(resolve, reject){
      c.find(params).count((err,doc)=>{
        if(err) {
          throw err;
        }else {
          resolve(doc);
        }
      });
    });
    return p;
  },
  
  limitFind: (c, params, skipNum, limit) => {
    let p = new Promise(function(resolve, reject){
      c.find(params).sort({'id':-1}).skip(skipNum).limit(limit).toArray((err,doc)=>{
        //db.close();
        if(err){
          throw err;
        }else{
          resolve(doc);
        }
      });
    });
    return p;
  }
}

router.post('/', function(req, res) {
  let data = req.body;
  let response = {};
  let Token = req.headers.token;
  
  Db.mongo.connect(Db.ten, (err,db) => {
      let MhPMIndexEdit = db.collection('MhPMIndexEdit');
      let MhUsers = db.collection('MhUsers');
      
      let base64 = data.showimg.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
      let bitmap = new Buffer(base64, 'base64');
      let dirname='public/MH/indexarticles';
      if(!fs.existsSync(dirname)) {  
        path.dirname(dirname); 
        fs.mkdirSync('./public/MH/indexarticles');    
      }
      
      P.find(MhUsers,{token:Token}).then((find_out)=>{
        if(!find_out) {
          res.json({
            suc: false,
            msg: '未登录'
          });
          return;
        }
        
        let createId = (new Date()).getTime();
        fs.writeFileSync('./public/MH/indexarticles/'+createId+'.png', bitmap);
        let imgUrl = 'MH/indexarticles/'+createId+'.png';

        MhPMIndexEdit.insert({
          mtitle: data.mtitle,
          subtitle: data.subtitle,
          describe: data.describe,
          showimg: imgUrl,
          type: Number(data.type),
          other: data.other,
          // 文章类型定义
          // 1==其他    2==技术文章    3==健身    4===美食  5====情感    6====旅游   index==全部
          id: 'ia151400'+createId,
          // 有个问题，用户发表文章的时候的头像不一定和当前头像一致，id是一致的
          sender: {
            nick: find_out.userNick,
            headurl: find_out.headurl,
            id: find_out.id
          },
          senderid: find_out.id,
          content: data.content,
          time: createId
        },function(err,doc){
          db.close();
          if(err){
            throw err;
          }else{
            //resolve(token);
            res.send({suc:true,msg:'添加成功'});
          }
        });
      });
  });
});

router.put('/detail', function(req, res) {
  let data = req.body;
  let response = {};
  let Token = req.headers.token;
  Db.mongo.connect(Db.ten, (err,db) => {
    const MhPMIndexEdit = db.collection('MhPMIndexEdit');
    const MhUsers = db.collection('MhUsers');
    if (err) {  
    } else {
      MhPMIndexEdit.update({id:data.id},{$set: {
        mtitle: data.mtitle,
        subtitle: data.subtitle,
        describe: data.describe,
//      showimg: imgUrl,
        type: Number(data.type),
        other: data.other,
        content: data.content
//      id: 'ia151400'+createId,
        // 有个问题，用户发表文章的时候的头像不一定和当前头像一致，id是一致的
//      sender: {
//        nick: find_out.userNick,
//        headurl: find_out.headurl,
//        id: find_out.id
//      },
//      senderid: find_out.id
      }},function(err,doc){
        db.close();
        if(err) { 
        }else {
          res.send({
            code:'00000000',
            suc:true,
            msg:'更新成功',
            data:''
          });
        }
      });
    }
  });
});

router.get('/detail', function(req, res) {
  let data = req.query;
  let response = {};
  let Token = req.headers.token;
  Db.mongo.connect(Db.ten, (err,db) => {
    const MhPMIndexEdit = db.collection('MhPMIndexEdit');
    const MhUsers = db.collection('MhUsers');
    //Util.find(MhUsers,{token:Token}).then((User)=>{
      //if(User && User.phone=="15958980872") {
        Util.find(MhPMIndexEdit,{id:data.id}).then((Detail)=>{
          if(Detail) {
            db.close();
            res.send({
              code:'00000000',
              suc:true,
              msg:'',
              data:Detail
            });
          }else {
            db.close();
            res.send({
              code:'00000000',
              suc:false,
              msg:'该文章不存在'
            });
          }
        });
//    }else {
//      db.close();
//      res.send({
//        code:'00000000',
//        suc:false,
//        msg:'无权操作'
//      });
//    }
    //});
  });
});

// 默认一次20数据，分页处理
router.get('/', function(req, res) {
  let data = req.query;
  let response = {};
  
//  res.send({s:10});
//  return;
  
  Db.mongo.connect(Db.ten, (err,db) => {
    //  数据应当反向排出
      let MhPMIndexEdit = db.collection('MhPMIndexEdit');
      P.count(MhPMIndexEdit,{},db).then((count)=>{
        let TOTAL = count;
        let cur = parseInt(data.page),
            limit = parseInt(data.count?data.count:20);
        let totalPage = Math.ceil(TOTAL/limit);
        let skipNum = (cur-1)*limit; 
        P.limitFind(MhPMIndexEdit, {}, skipNum, limit).then((limitFind)=>{
//        let newlimitFind = limitFind.map((item)=>{
//          item.sender.headurl = '';
//          P.find(db.collection('MhUsers'),{id:item.sender.id}).then((sender_res)=>{
//            item.sender.headurl = sender_res?sender_res.headurl:'';
//          });
//          return item;
//        });
          db.close();
          res.json({
            code: '',
            data: {
              suc: true,
              totalPage: totalPage,
              cur: cur,
              lists: limitFind,
              totalCount: TOTAL
            },
            suc: true
          });
        });
      });
  });
});

router.delete('/', function(req, res) {
  let data = req.body;
  let response = {};
  
  res.send({s:0});
});

module.exports = router;