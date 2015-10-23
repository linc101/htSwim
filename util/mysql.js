var mysql=require("mysql");

var pool  = mysql.createPool({
 acquireTimeout: 30000,
  connectionLimit : 10,
  host: 'localhost',
  user: 'root',
  password: '123456',
  database:'ths',
  port: 3306
});



exports.excute=function(sql,option,callback){
	pool.getConnection(function(err,connection){
		if(err){console.log("[get mysql connection error]:"+err.stack);return;}
		connection.query(sql,option,function(err,result){
			if(err){console.log("[excute mysql error]:"+err.stack);}
			connection.release();
			callback(err,result);
		});
	});
}

