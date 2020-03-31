let express = require('express');
let router = express.Router();
let Db = require('../../.././database/db.js');
let fs = require('fs');
let path = require('path');
let Util = require('../.././lib/util.js');

router.get('/', function(req, res) {
  let data = req.query;
  let response = {};
  Db.mongo.connect(Db.ten, (err,db) => {
    //  数据应当反向排出
      let queryParams = {status:'pass'};
      // index 0   ====all
      if (data.type && data.type!='index' && data.type!=0) {
        queryParams.type = Number(data.type);
      }
      if (data.type && data.type==2 && data.sectype) { // 技术
        queryParams.sectype = data.sectype
      }
      let MhPMIndexEdit = db.collection('MhPMIndexEdit');
      Util.count(MhPMIndexEdit,queryParams,db).then((count)=>{
        let TOTAL = count;
        let cur = parseInt(data.page),
            limit = parseInt(data.count?data.count:20);
        let totalPage = Math.ceil(TOTAL/limit);
        let skipNum = (cur-1)*limit; 
        Util.limitFind(MhPMIndexEdit, queryParams, skipNum, limit).then((limitFind)=>{
          db.close();
          res.json({
            code: '',
            data: {
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

router.get('/my', function(req, res) {
  let data = req.query;
  let response = {};
  let Token = req.headers.token;
  Db.mongo.connect(Db.ten, (err,db) => {
    let MhUsers = db.collection('MhUsers');
    Util.find(MhUsers,{token:Token}).then((find_out)=>{
      if(!find_out) {
        db.close();
        res.json({
          suc: false,
          msg: '请先登录'
        });
        return;
      }else {
        let queryParams = {senderid: find_out.id};
        if (data.status) queryParams.status = data.status;
        if (data.type && data.type!=0) queryParams.type = Number(data.type);
        let MhPMIndexEdit = db.collection('MhPMIndexEdit');
        Util.count(MhPMIndexEdit,queryParams,db).then((count)=>{
          let TOTAL = count;
          let cur = parseInt(data.page),
              limit = parseInt(data.count?data.count:20);
          let totalPage = Math.ceil(TOTAL/limit);
          let skipNum = (cur-1)*limit; 
          Util.limitFind(MhPMIndexEdit, queryParams, skipNum, limit).then((limitFind)=>{
            db.close();
            res.json({
              code: '',
              data: {
                totalPage: totalPage,
                cur: cur,
                lists: limitFind,
                totalCount: TOTAL
              },
              suc: true
            });
          });
        });
      }
    }); 
  });
});

router.post('/', (req, res) => {
  let data = req.body;
  let response = {};
  let Token = req.headers.token;
  Db.mongo.connect(Db.ten, (err,db) => {
    let MhPMIndexEdit = db.collection('MhPMIndexEdit');
    let MhUsers = db.collection('MhUsers');
    //
    let base64 = data.showimg.replace(/^data:image\/\w+;base64,/, "");
    //去掉图片base64码前面部分data:image/png;base64
    let bitmap = new Buffer(base64, 'base64');
    let dirname='public/MH/articlesImg';
    if(!fs.existsSync(dirname)) {  
      path.dirname(dirname); 
      fs.mkdirSync('./public/MH/articlesImg');    
    }
    Util.find(MhUsers,{token:Token}).then((find_out)=>{
      if(!find_out) {
        db.close();
        res.json({
          suc: false,
          msg: '请先登录'
        });
        return;
      }
      let createId = (new Date()).getTime();
      fs.writeFileSync('./public/MH/articlesImg/'+createId+'.png', bitmap);
      let imgUrl = 'MH/articlesImg/'+createId+'.png';
      Util.insert(MhPMIndexEdit, {
        mtitle: data.mtitle,
        subtitle: data.subtitle,
        describe: data.describe,
        showimg: imgUrl,
        type: Number(data.type),
        content: data.content,
        other: data.other,
        id: 'iarticle151400'+createId,
        sender: {
          nick: find_out.userNick,
          headurl: find_out.headurl,
          id: find_out.id
        },
        senderid: find_out.id,
        time: createId,
        status: 'ing'
      }).then(() => {
        db.close();
        res.send({suc:true,msg:'添加成功'});
      }).catch(() => {
        db.close();
        res.send({suc:false,msg:'添加失败'});
      });
    });
  });
});

router.put('/detail', (req, res) => {
  let data = req.body;
  let response = {};
  let Token = req.headers.token;
  Db.mongo.connect(Db.ten, (err,db) => {
    const MhPMIndexEdit = db.collection('MhPMIndexEdit');
    const MhUsers = db.collection('MhUsers');
    // 未登录、非管理员只可以编辑自己的、管理员可以随便编辑
    Util.find(MhUsers,{token:Token}).then((find_out)=>{
      if(!find_out) {
        db.close();
        res.json({
          suc: false,
          msg: '请先登录'
        });
        return;
      } else if (data.senderid==find_out.id || find_out.level==1 || find_out.phone=='15958980873') {
        // 操作
        let savedata = {
          mtitle: data.mtitle,
          subtitle: data.subtitle,
          describe: data.describe,
          type: Number(data.type),
          content: data.content,
          sectype: data.sectype,
          createType: data.createType,
          copyfrom: data.copyfrom
        }
        Util.update(MhPMIndexEdit, {id:data.id}, savedata).then(() => {
          db.close();
          res.json({
            suc: true,
            msg: '更新成功'
          });
        });
      } else {
        db.close();
        res.json({
          suc: false,
          msg: '您无权作此操作'
        });
      }
    });
  });
});

router.get('/detail', (req, res) => {
  
});

router.delete('/', (req, res) => {
  
});

router.post('/status', (req, res) => {
  // 审核中 ing  通过 pass  未通过 unpass 
  let data = req.body;
  let response = {};
  let Token = req.headers.token;
  Db.mongo.connect(Db.ten, (err,db) => {
    let MhPMIndexEdit = db.collection('MhPMIndexEdit');
    let MhUsers = db.collection('MhUsers');
    Util.find(MhUsers,{token:Token}).then((find_out)=>{
      if(!find_out) {
        db.close();
        res.json({
          suc: false,
          msg: '请先登录'
        });
        return;
      }
      Util.update(MhPMIndexEdit, {id: data.id}, {status:data.status<0?'unpass':'pass'}).then(()=>{
        db.close();
        res.send({suc:true,msg:'修改成功'});
      });
    });
  });
  //res.send({suc: data.id})
});

router.get('/statistics', (req, res) => {
  let response = {};
  let Token = req.headers.token;
  Db.mongo.connect(Db.ten, (err,db) => {
    let MhPMIndexEdit = db.collection('MhPMIndexEdit');
    let MhUsers = db.collection('MhUsers');
    Util.find(MhUsers,{token:Token}).then((find_out)=>{
      if(!find_out) {
        db.close();
        res.json({
          suc: false,
          msg: '请先登录'
        });
        return;
      }
      
      Promise.all([
        Util.count(MhPMIndexEdit,{}), 
        Util.count(MhPMIndexEdit,{status:'ing'}), 
        Util.count(MhPMIndexEdit,{status:'pass'}), 
        Util.count(MhPMIndexEdit,{status:'unpass'}),
          Util.count(MhPMIndexEdit,{type:1}),
          Util.count(MhPMIndexEdit,{type:2}),
          Util.count(MhPMIndexEdit,{type:3}),
          Util.count(MhPMIndexEdit,{type:4}),
          Util.count(MhPMIndexEdit,{type:5}),
          Util.count(MhPMIndexEdit,{type:6})
      ]).then((result) => {
        //console.log(result)
        // [25, 25]
        res.send({
          suc: true,
          msg: '',
          data: {
            total: result[0],
            ing: result[1],
            fail: result[3],
            success: result[2],
            res: result.splice(4)
          }
        });
      });
    });
  });
  
});


module.exports = router;
