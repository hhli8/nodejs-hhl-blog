let Db = require('../.././database/db.js');
let P ={};
P.find = (c, params) => {
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
}

P.insert = (c, params) => { 
  let p = new Promise(function(resolve, reject){
      c.insert(params, (err,doc) => {
        if(err){
          throw err;
        }else{
          resolve({suc:true});
        }
      });
  });
  return p;
}

P.count = (c, params) => {
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
}

P.limitFind = (c, params, skipNum, limit) => {
  let p = new Promise(function(resolve, reject){
    c.find(params).sort({'id':-1}).skip(skipNum).limit(limit).toArray((err,doc)=>{
      if(err){
        throw err;
      }else{
        resolve(doc);
      }
    });
  });
  return p;
}

P.update = (c, params1, params2) => {
  let p = new Promise(function(resolve, reject){
    c.update(params1, {$set:params2}, (err,doc) => {
      if(err){
        throw err;
      }else{
        resolve({suc:true});
      }
    });
  });
  return p;
}

module.exports = P;