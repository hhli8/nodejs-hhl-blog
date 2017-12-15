//var mongo = require('mongodb');
//var host = 'localhost';
//var port = 27017;
//
//var server = new mongo.Server(host,port,{auto_reconnect:true});
//var db = new mongo.Db('ten',server,{safe:true});
//module.exports = db;

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/ten'; //# 数据库为 ten
exports.mongo = MongoClient;
exports.ten = DB_CONN_STR;