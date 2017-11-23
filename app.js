let express = require('express');
let app = express();
let bodyParser = require('body-parser');
//可访问静态文件
app.use(express.static('public'));
//post请求的设置相关--post参数无法获取和图片转码太大无法上传问题
app.use(bodyParser.urlencoded({extended: true,limit: '50mb'}));

//设置跨域访问
app.all('*', function(req, res, next) {
//res.header("Access-Control-Allow-Origin", "*");
//res.header("Access-Control-Allow-Headers", "X-Requested-With");
//res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//res.header("X-Powered-By",' 3.2.1');
//res.header("Content-Type", "application/json;charset=utf-8");
////res.header("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
//next();
  
  response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods", "*");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
        response.setHeader("Access-Control-Expose-Headers", "*");

        if (request.getMethod().equals("OPTIONS")) {
            HttpUtil.setResponse(response, HttpStatus.OK.value(), null);
            return;
        }
  
  
//res.header('Access-Control-Allow-Origin', '*');
//  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//
//  if (req.method == 'OPTIONS') {
//      res.send(200);
//      /make the require of options turn back quickly/
//  } else {
//      next();
//  }
});

//app.get('/',require('./routes/index.js'));
app.use('/',require('./routes/index'));
app.use('/login',require('./routes/login'));

let server = app.listen(3000, function () {
  console.log('success');
});