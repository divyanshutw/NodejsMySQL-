connection.connect(function (err) {
   if(err){
       console.log("error occured while connecting");
   }
   else{
       console.log("connection created with Mysql successfully");
   }
});