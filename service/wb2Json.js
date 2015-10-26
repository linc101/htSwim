function ParseService(){

	this.toJson=function(data,itemCallback){
		var sheets = data.SheetNames,
		obj = {};
		for(var i = 0,l=sheets.length;i<l;i++){
			var t = obj[sheets[i]] = [],
			tpsh = data.Sheets[sheets[i]],
			index = tpsh['!ref'],
			start = index.split(':')[0],
			end = index.split(':')[1],
			startNum = parseInt(start.substring(1)),
			endNum = parseInt(end.substring(1)),
			startCharCode =  start.charCodeAt(0),
			endCharCode = end.charCodeAt(0);
			for(var j = 1; j<=endNum;j++){
				var tmpV = [];
				for(var k =startCharCode;k<=endCharCode;k++){
					var index = String.fromCharCode(k)+j;
					tmpV.push(!!tpsh[index]?tpsh[index].v:'');
				}
				t.push(tmpV);
			}
		}
		return obj;

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