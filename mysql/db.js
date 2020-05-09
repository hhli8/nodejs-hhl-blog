var mysql = require('mysql')
var db = {}
db.query = function sqlback (sqllan, fn) {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1111',
    datanase: 'boke',
    port: 3306
  })
  connection.connect(function (err) {
    if (err) {
      console.log(err)
      return
    }
  })
  var sql = sqllan
  if (!sql) return
  connection.query(sql, function (err, rows, fields) {
    if (err) return
    fn(rows)
  })
  connection.end(function (err) {
    if (err) return
    console.log('连接关闭')
  })
}
module.exports = db