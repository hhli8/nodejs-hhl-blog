var userId = {};
var toChat = {};
let io = require('socket.io').listen(server)
io.on('connection', function (socket) {
  console.log('a user connected')
  // socket.on('open', '初始化连接')
  socket.on('add user', function (data) {
    console.log(data)
  });
})