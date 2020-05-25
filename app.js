let express = require('express');
let app = express();
var path = require('path');


// socket测试
//let http=require('http').Server(app);
//let io=require('socket.io')(http);
//io.on('connection', (socket)=>{
//console.log('连接成功3！');
//});


let bodyParser = require('body-parser');
//可访问静态文件
app.use('/', express.static('public'));
app.use('/view', express.static('view'));
//post请求的设置相关--post参数无法获取和图片转码太大无法上传问题
// https://blog.csdn.net/u010186511/article/details/78113207  版本
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true,limit: '50mb'}));

//设置跨域访问
app.all('*', function(req, res, next) {
    if(req.headers.origin=='http://172.32.30.167:8080' || req.headers.origin=='http://127.0.0.1:8080' || req.headers.origin=='http://127.0.0.1:8081' || req.headers.origin=='http://172.32.1.216:8080' || req.headers.origin=='http://106.15.176.100:80') {
      res.header("Access-Control-Allow-Origin", req.headers.origin);
    }
    //res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // 是否传cookie
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type,Access-Token,token");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    // res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    next();
});


//app.get('/',require('./routes/index.js'));
//app.use('/',require('./routes/index'));
//app.use('/login',require('./routes/login'));
//app.use('/article',require('./routes/article'));
//app.use('/crawl',require('./routes/crawl'));

app.use('/mhlogin',require('./routes/muhai/login'));
app.use('/mhset',require('./routes/muhai/set'));

app.use('/mhPM/index',require('./routes/muhai/PM/index_article'));
app.use('/mhPM/meetingEdit',require('./routes/muhai/PM/meeting_edit'));
app.use('/mhPM/technologyEdit',require('./routes/muhai/PM/technology_edit'));

//_______________________new_10.29
app.use('/mhPM/article',require('./routes/muhai/PM/article'));
// 百度人脸融合相关
app.use('/baidu',require('./routes/baidu'));

// 代理

// alipay
app.use('/alipay', require('./routes/alipay'))

// shop
app.use('/shop/default', require('./routes/shop/default'))
// shopAdmin
app.use('/shopadmin/default', require('./routes/shopadmin/default'))
app.use('/shopadmin/common', require('./routes/shopadmin/common'))

// jsonp---测试
app.get('/getdata_jsonp', function(req, res, next){
    let response = {
      "title": "习近平致信祝贺第三届世界智能大会开幕",
      "content": "5月16日电第三届世界智能大会16日在天津开幕。国家主席习近平致信，向大会的召开致以热烈的祝贺，向出席会议的国际知名企业家、业界领军人物和图灵奖获得者等各界人士表示诚挚的欢迎。"
    }
    res.type('application/json')
    res.jsonp(response)
})




//let server = http.listen(3000, function () {
//console.log('success111');
//});
let server = app.listen(3001, function () {
  console.log('success111');
});

