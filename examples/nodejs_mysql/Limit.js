var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"nodejs"
})

con.connect(function(err){
    if (err) throw err;
    var sql = "SELECT * FROM languages LIMIT 1";
    con.query(sql, function(err,result){

        if (err) throw err;
        console.log(result);

    });

});