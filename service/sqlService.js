var sqlExcutor=require("../util/mysql");

function UserService(){

	this.addMember=function(data,callback){
		data.push(new Date());
		var sql = "insert into member(name, workNo, gender, workGroup, tel,type,isCharged,note,time) values(?,?,?,?,?,?,?,?,?)";
		sqlExcutor.excute(sql, data, callback);
	};

	// this.validateUser=function(username,passwd,callback){
	// 	var option=[username,passwd];
	// 	sqlExcutor.excute("select * from user where username=? and password=?",option,callback);
	// };

	// this.updateUser=function(username,passwd,ip,callback){
	// 	var option=[ip,username,passwd];
	// 	sqlExcutor.excute("update user set master_ip=? where username=? and password=?",option,callback);
	// };
	
	// this.checkUserName = function(username, callback){
	// 	var option = [username];
	// 	sqlExcutor.excute("select * from user where username=?" , option, callback);
	// };
}

module.exports=UserService;
