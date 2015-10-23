function ParseService(){

	this.toJson=function(data,itemCallback){
		var sheets = data.SheetNames;
		for(var i = 0,l=sheets.length;i<l;i++){
			var tpsh = data.sheets[sheets[i]],
			index = tpsh['!ref'];

		}

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

module.exports=ParseService;