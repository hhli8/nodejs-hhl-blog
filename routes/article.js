let Db=require('.././database/db.js');
let express = require('express');
let router = express.Router();

//router.get('/', function(req, res) {
//let response;
//Db.mongo.connect(Db.ten, function(err,db){
//  console.log('链接成功');
//  let Users=db.collection('person');
//  Users.find({name:'jack'}).toArray(function(err,doc){
//    if(doc.length){
//      response={'suc':true,'res':doc[0],msg:'成功'};
//    }else{
//      response={'suc':false,'msg':'账号或密码有误'};
//    }
//    db.close();
//    res.json(response);
//  });
//  //res.json(response); //此处不行
//});
//});

router.post('/add', function(req, res) {
  let response;
  let data=req.body;
  let t=new Date();
  let id='a'+Date.parse(t)/1000;
  Db.mongo.connect(Db.ten, (err,db) => {
    let Articles=db.collection('articles');
    Articles.count({},(error,doc)=>{
      if(error){
        throw error;
      }else{
        id+=''+(doc+1);
        data.id=id;
        if(!data.simg.site){
          let fs = require('fs');
          let path = require('path');
          let base64 = data.simg.img.replace(/^data:image\/\w+;base64,/, "");//去掉图片base64码前面部分data:image/png;base64
          let bitmap = new Buffer(base64, 'base64');
          let dirname='public/article-imgs';
          if(fs.existsSync(dirname)){  
            //fs.mkdirSync(dirpath)  
          }else{     
            path.dirname(dirname); 
            fs.mkdirSync('./public/article-imgs');  
          }  
          fs.writeFileSync('./public/article-imgs/'+id+'.png', bitmap);
          data.simg.site='http://localhost:3000/article-imgs/'+id+'.png';
          //data.simg.site='http://www.weeksign.com:3000/article-imgs/'+id+'.png';
          //res.json({suc:true,rs:fs});
        }
        
        
        data.simg.img=''; // 从img转化为site
        Articles.insert(data,function(err,doc){
          if(err){
            throw err;
            response={suc:false,msg:'数据库出错'};
          }else{
            response={suc:true,res:'',msg:'成功'};
          }
          db.close();
          res.json(response);
        });
      }
    });
  });
});

router.get('/find', function(req, res) {
  let response;
  Db.mongo.connect(Db.ten, (err,db) => {
    let Articles=db.collection('articles');
    let query=req.query;
    let search={
      level1:query.level1   //,level2:query.level2
    };
    if(query.level2){search={level1:query.level1,level2:query.level2}   }
    Articles.find(search).count((err,doc)=>{
      if(err){
        throw err;
      }else{
        let total=doc;
        let cur=parseInt(query.page),
            limit=parseInt(query.count);
        let totalPage=Math.ceil(total/limit);
        let skipNum=(cur-1)*limit;  
        Articles.find(search).skip(skipNum).limit(limit).toArray((err,doc)=>{
          if(err){
            throw err;
          }else{
            if(doc.length){
              response={suc:true,res:doc,page:cur,total:total,totalPage:totalPage};
            }else{
              response={suc:true,res:'',msg:'暂无数据'};
            }
            db.close();
            res.json(response);
          }
        });
//      Articles.find(search).skip(skipNum).limit(limit).toArray((err,doc)=>{
//        if(err){
//          throw err;
//        }else{ 
//          if(doc.length){
//            response={suc:true,res:doc,page:cur,total:total,totalPage:totalPage};
//          }else{
//            response={suc:true,res:'',msg:'暂无数据'};
//          }
//          res.json(response);
//        }
//      });

//      skipNum=total-skip-limit;
//      if(skipNum<0){
//        skipNum=0;
//        limit=data.total-skip;
//      }
      }
    });
  });
});

router.post('/abort', function(req, res) {
  res.json(req.body);
});

module.exports = router;