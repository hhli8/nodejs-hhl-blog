let express = require('express');
let router = express.Router();
let Db = require('../../.././database/db.js');
let fs = require('fs');
let path = require('path');
Array.prototype.indexOf = function(val) {
for (var i = 0; i < this.length; i++) {
if (this[i] == val) return i;
}
return -1;
};
Array.prototype.remove = function(val) {
var index = this.indexOf(val);
if (index > -1) {
this.splice(index, 1);
}
};

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
  
  insert: (c, params)=> {
    let p = new Promise(function(resolve, reject){
      c.insert(params,function(err,doc){
        if(err){
          throw err;
        }else{
          resolve('');
        }
      });
    });
    return p; 
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
    let MhMeeting = db.collection('MhMeeting');
    let MhUsers = db.collection('MhUsers');
    P.find(MhUsers,{token:Token}).then((find_out)=>{
      if(!find_out) {
        db.close();
        res.json({
          suc: false,
          msg: '未登录'
        });
        return;
      }   
      
      P.find(MhMeeting,{userid:find_out.id}).then((mt_out)=>{
        //let createId = 'mt151500'+(new Date()).getTime();
        if(mt_out) { // update
          //data.id = mt_out.id;
          //data.userid = mt_out.userid;
          //data.pictures = mt_out.pictures;
          // 必须单独写才可以替换
          MhMeeting.update({id:mt_out.id},{$set:{
            name: data.name,
            sex: data.sex,
            profession: data.profession,
            height: data.height,
            education: data.education,
            birth: data.birth,
            constellation: data.constellation,
            birthAdr: data.birthAdr,
            earn: data.earn,
            workAdr: data.workAdr,
            interest: data.interest,
            describe: data.describe
          }},(err,doc)=>{
            db.close();
            res.send({
              code: '',
              data: {
                suc: true,ss:89
              },
              msg: '成功'
            });
          });
        }else { // insert
          // 不存在
        }
      });
    });
  });

});

const emptyDir = (fileUrl) => {
  var files = fs.readdirSync(fileUrl);
  files.forEach(function(file){
    var stats = fs.statSync(fileUrl+'/'+file);
    if(stats.isDirectory()) {
      //emptyDir(fileUrl+'/'+file);
    }else {
      fs.unlinkSync(fileUrl+'/'+file);
    }
  });
};

router.get('/', function(req, res) {
  let query = req.query;
  let response = {};
  let Token = req.headers.token;
  
  Db.mongo.connect(Db.ten, (err,db) => {
    let MhMeeting = db.collection('MhMeeting');
    let MhUsers = db.collection('MhUsers');
    P.find(MhUsers, {token:Token}).then((find_out)=>{
      let params = {};
      if(query && query.id) {
        params = {id:query.id};
      }else {
        if(!find_out) {
          db.close();
          res.json({
            code: '',
            data: {suc:false},
            msg: '未登录'
          });
          return;
        } 
        params = {userid:find_out.id};
      }
      P.find(MhMeeting, params).then((find_mt)=>{
        db.close();
        res.json({
          code: '',
          data: {
            suc:true,
            val:find_mt
          },
          msg: ''
        });
      });
    });
  });
});

// 获取列表
router.get('/lists', function(req, res) {
  let data = req.query;
  let response = {};
  let Token = req.headers.token;
  
  Db.mongo.connect(Db.ten, (err,db) => {
    let MhMeeting = db.collection('MhMeeting');
    let MhUsers = db.collection('MhUsers');
    P.find(MhUsers, {token:Token}).then((find_out)=>{
      
      P.count(MhMeeting,{},db).then((count)=>{
        let TOTAL = count;
        let cur = parseInt(data.page),
            limit = parseInt(data.count?data.count:20);
        let totalPage = Math.ceil(TOTAL/limit);
        let skipNum = (cur-1)*limit; 
        P.limitFind(MhMeeting, {}, skipNum, limit).then((limitFind)=>{
          if(!find_out) {
            db.close();
            res.json({
              code: '',
              data: {
                suc: true,
                totalPage: totalPage,
                cur: cur,
                lists: limitFind,
                totalCount: TOTAL
              }
            });
          }else {
            let MhUsersCollection = db.collection('MhUsersCollection');
            P.find(MhUsersCollection,{id:find_out.id}).then((find_col)=>{
              db.close();
              let limitFindNew;
              if(find_col) {
                limitFindNew = limitFind.map((item)=>{
                  for(let i=0,l=find_col.lists.length;i<l;i++) {
                    if(item.id==find_col.lists[i].id){
                      item.islove = true;
                    }
                  }
                  return item;
                });
              }else {
                limitFindNew = limitFind;
              }
              res.json({
                code: '',
                data: {
                  suc: true,
                  totalPage: totalPage,
                  cur: cur,
                  lists: limitFindNew,
                  lists2: find_col,
                  totalCount: TOTAL
                }
              });
            });
          }
        });
      });
      
    });
  });
});

//pictures
router.post('/picture',(req, res)=>{
  let data = req.body;
  let response = {};
  let Token = req.headers.token;
  
  Db.mongo.connect(Db.ten, (err,db) => {
    let MhMeeting = db.collection('MhMeeting');
    let MhUsers = db.collection('MhUsers');
    P.find(MhUsers,{token:Token}).then((find_out)=>{
      if(!find_out) {
        db.close();
        res.json({
          suc: false,
          msg: '未登录'
        });
        return;
      } 
      P.find(MhMeeting,{userid:find_out.id}).then((mt_out)=>{
        let createId = 'mt151500'+(new Date()).getTime();
        if(!mt_out) {
          let dirname='public/MH/meeting/'+createId;
          if(!fs.existsSync(dirname)) {  
            path.dirname(dirname); 
            fs.mkdirSync('./public/MH/meeting/'+createId);    
          }
        }else {
          createId = mt_out.id;
        }
        let base64 = data.base64.replace(/^data:image\/\w+;base64,/, "");
        let bitmap = new Buffer(base64, 'base64');
        let picname = (new Date()).getTime();
        fs.writeFileSync('./public/MH/meeting/'+createId+'/'+picname+'.png', bitmap);
        let picsrc = 'MH/meeting/'+createId+'/'+picname+'.png';
        
        let callback = ()=>{
          db.close();
          res.send({
            code: '',
            data: {
              suc: true,
              obj: {id: picname, src: picsrc}
            },
            msg: '成功'
          });
        };
        
        if(mt_out) {
          let newpictures = mt_out.pictures;
          newpictures.push({id: picname, src: picsrc});
          MhMeeting.update({id:mt_out.id},{$set:{pictures: newpictures}},(err,doc)=>{
            if(err) {
              throw err;
            }
            callback();
          });
        }else { 
          let senddata = {
            userid: find_out.id,
            id: createId,
            pictures: [{id: picname, src: picsrc}],
            lovecount: 0
          };
          MhMeeting.insert(senddata, (err,doc)=>{
            if(err) {
              throw err;
            }
            callback();
          });
        }
        
      });
    });
  });
  
});

router.delete('/picture',(req, res)=>{
  let query = req.query;
  let response = {};
  let Token = req.headers.token;
  
  Db.mongo.connect(Db.ten, (err,db) => {
    let MhMeeting = db.collection('MhMeeting');
    let MhUsers = db.collection('MhUsers');
    P.find(MhUsers,{token:Token}).then((find_out)=>{
      if(!find_out) {
        db.close();
        res.json({
          suc: false,
          msg: '未登录'
        });
        return;
      } 
      // 查找数据的user的token是否与这个匹配，否则无权删除或操作，不存在啊，删除的数据是根据自己的userid查找的
      P.find(MhMeeting,{userid:find_out.id}).then((mt_out)=>{
        let pictures = mt_out.pictures;
        pictures.forEach((item,index)=>{
          if(item.id==query.id) {
            pictures.splice(index,1);
          }
        })
        
        fs.unlink('./public/MH/meeting/'+mt_out.id+'/'+query.id+'.png', function(err) {
          if (err) {
            throw err;
          }
        });
        MhMeeting.update({id:mt_out.id},{$set:{pictures: pictures}},(err,doc)=>{
          db.close();
          if(err) {
            throw err;
          }
          res.send({
            code: '',
            data: {
              suc: true
            },
            msg: '删除成功'
          });
        });  
      });
      
    });
  });
  
});

// love //列表显示是否已收藏，在获取列表时匹配对比自己的收藏列表添加 tag表示是否收藏，
    // 还有个缺陷是，收藏后，他人编辑信息，自己的收藏列表数据没有改变
router.post('/love', (req,res)=>{
  let data = req.body;
  let response = {};
  let Token = req.headers.token;
  
  Db.mongo.connect(Db.ten, (err,db) => {
    let MhMeeting = db.collection('MhMeeting');
    let MhUsers = db.collection('MhUsers');
    P.find(MhUsers,{token:Token}).then((find_out)=>{
      if(!find_out) {
        db.close();
        res.json({
          suc: false,
          msg: '未登录'
        });
        return;
      }
      let MhUsersCollection = db.collection('MhUsersCollection');
      P.find(MhMeeting,{id:data.id}).then((find_mt)=>{ 
        P.find(MhUsersCollection,{id:find_out.id}).then((find_col)=>{
          let lovecount = find_mt.lovecount?find_mt.lovecount:0;
          if(!data.love) { //删除
            if(lovecount<=0) lovecount = 1;
            lovecount--;
            MhMeeting.update({id:data.id},{$set: {lovecount:lovecount}},(err,doc)=>{
              if(err) {
                throw err;
              }else {
                let lists = find_col.lists;
                lists.forEach((item,index)=>{
                  if(item.id==find_mt.id) {
                    lists.splice(index,1);
                  }
                })
                MhUsersCollection.update({id:find_out.id},{$set: {
                  id: find_out.id,
                  lists: lists
                }},function(err,doc){
                  db.close();
                  if(err){
                    throw err;
                  }else{
                    res.send({
                      code: '',
                      msg: '取消成功',
                      data: {suc:true}
                    });
                  }
                });
              }
            });
          }else { // 添加
            lovecount++;
            let find_col_lists = find_col?find_col.lists:[];
            for(var i=0,l=find_col_lists.length;i<l;i++) {
              if(find_col_lists[i].id==data.id){
                db.close();
                res.send({
                  code: '',
                  msg: '已添加',
                  data: {suc:false}
                });
                return;
              }
            }
            
            MhMeeting.update({id:data.id},{$set: {lovecount:lovecount}},(err,doc)=>{
              if(err) {
                throw err;
              }else {
                if(find_col) { 
                  let lists = find_col.lists;
                  lists.push(find_mt);
                  MhUsersCollection.update({id:find_out.id},{$set: {
                    id: find_out.id,
                    lists: lists
                  }},function(err,doc){
                    db.close();
                    if(err){
                      throw err;
                    }else{
                      res.send({
                        code: '',
                        msg: '喜欢成功',
                        data: {suc:true}
                      });
                    }
                  });
                }else { 
                  let lists = [];
                  lists.push(find_mt);
                  P.insert(MhUsersCollection, {
                    id: find_out.id,
                    lists: lists
                  }).then((out)=>{
                    db.close();
                    res.send({
                      code: '',
                      msg: '',
                      data: {suc:true}
                    });
                  });
                }
              }
            });
          }// 添加Over
        });
        
        
//      res.send({
//        code: '',
//        msg: '',
//        data: {out:find_mt}
//      });
      });
    });
  });
});

module.exports = router;