let express = require('express');
let app = express();


// socket测试
let http=require('http').Server(app);
let io=require('socket.io')(http);
io.on('connection', (socket)=>{
  console.log('连接成功！');
});


let bodyParser = require('body-parser');
//可访问静态文件
app.use(express.static('public'));
//post请求的设置相关--post参数无法获取和图片转码太大无法上传问题
app.use(bodyParser.urlencoded({extended: true,limit: '50mb'}));

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//app.get('/',require('./routes/index.js'));
app.use('/',require('./routes/index'));
app.use('/login',require('./routes/login'));
app.use('/article',require('./routes/article'));

let server = http.listen(3000, function () {
  console.log('success111');
});
//let server = app.listen(3000, function () {
//console.log('success111');
//});