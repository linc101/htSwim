var sqlExcutor=require("../util/SqlExcutor");

function CloudService(){

	this.checkCloudName = function(username,cloudName,callback){
		var option = [cloudName,username];
		sqlExcutor.excute("select * from cloud where cloud_name=? and user_name=?" , option, callback);
	};

	this.insertCloud = function(username, cloudName, ip, callback){
		var option = [cloudName,username,ip];
		sqlExcutor.excute("insert into cloud(cloud_name, user_name, master_ip,create_time) values (?,?,?,now())", option, callback);
	}

	this.getCloudIp=function(username,cloudName,callback){
		var option=[cloudName,username];
		sqlExcutor.excute("select master_ip from cloud where cloud_name=? and user_name=?", option, callback);
	}

	this.updateCloudName = function(username, cloudName, masterIp, callback){
		var option = [ cloudName,username,masterIp];
		sqlExcutor.excute("update cloud set cloud_name = ? , user_name = ? where master_ip=?", option, callback);
    }

	this.getAllCluster=function(username,callback){
		var option=[username];
		sqlExcutor.excute("select cloud_name as name ,master_ip as ip,create_time as createTime from cloud where user_name=?", option, callback);
	}

	this.checkMasterIp = function(ip, callback){
		var option = [ip];
		sqlExcutor.excute("select * from cloud where master_ip=?", option, callback);
	}

	this.updateMasterIp = function(username, cloudName, masterIp, callback){
		var option = [masterIp, username, cloudName];
		sqlExcutor.excute("update cloud set master_ip = ? where user_name=? and cloud_name=?", option, callback);
    }

    this.deleteCloud = function(masterIp,callback){
    	var option = [masterIp];
    	sqlExcutor.excute("delete from cloud where master_ip = ?",option,callback);
    }

    this.checkMasterIpByUserName = function(ip, userName,callback){
		var option = [ip,userName];
		sqlExcutor.excute("select * from cloud where master_ip=? and user_name=?", option, callback);
	}

}

module.exports=CloudService;
