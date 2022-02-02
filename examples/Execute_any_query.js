const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"username",		//MySQL username
    password:"password",	//MySQL password
    database:"nodejs",		//Database name....create database first from MySQL
    multipleStatements:true		    //For exsecuting multiple SQL statements in one go
});

readline.question(`Write your query here \n`, name => {
    con.connect(function(err){
        if(err) throw err;
        var sqlQuery=name;
        con.query(sqlQuery,function(err,result) {
            if(err) throw err;
            console.log(result.affectedRows+" rows affected");
            console.log(result);
        });
    });
  readline.close()
})

