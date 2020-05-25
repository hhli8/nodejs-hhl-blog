//var mongo = require('mongodb');
//var host = 'localhost';
//var port = 27017;
//
//var server = new mongo.Server(host,port,{auto_reconnect:true});
//var db = new mongo.Db('ten',server,{safe:true});
//module.exports = db;

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_SHOP = 'mongodb://localhost:27017/shop'; //# 数据库为 shop
exports.mongo = MongoClient;
exports.shop = DB_CONN_SHOP;