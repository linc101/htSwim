var sqlExcutor=require("../util/SqlExcutor");

function UserService(){

	this.createUser=function(userName, passwd, email, telephone, company, callback){
		var option=[userName, passwd, email, company, telephone];
		var sql = "insert into user(username, password, email, company, telephone) values(?,?,?,?,?)";
		sqlExcutor.excute(sql, option, callback);
	};

	this.validateUser=function(username,passwd,callback){
		var option=[username,passwd];
		sqlExcutor.excute("select * from user where username=? and password=?",option,callback);
	};

	this.updateUser=function(username,passwd,ip,callback){
		var option=[ip,username,passwd];
		sqlExcutor.excute("update user set master_ip=? where username=? and password=?",option,callback);
	};
	
	this.checkUserName = function(username, callback){
		var option = [username];
		sqlExcutor.excute("select * from user where username=?" , option, callback);
	};
}

module.exports=UserService;
