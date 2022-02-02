var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "nodejs"
});

con.connect(function(err) {
  if (err) throw err;
  //Asending order
 // con.query("SELECT * FROM languages ORDER BY name", function (err, result) {
     //descending order
    con.query("SELECT * FROM languages ORDER BY name DESC", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});