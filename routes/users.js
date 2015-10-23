var express = require('express');
var router = express.Router();
var util = require('util');
var multiparty = require('multiparty');
var xlsx = require('xlsx');
 var fs = require("fs") ;
 var member = require('../service/sqlService');

/* GET users listing. */
router.post('/upload',function(req, res, next) {
	var form = new multiparty.Form({
		autoFiles:true,
		uploadDir:'./temp'
	});
	form.parse(req, function(err, fields, files) {
		if(err) throw err;

		var workbook = xlsx.readFile('./'+files.members[0].path);
		// console.log(workbook);
		console.log(xlsx.utils.sheet_to_json());
		// parseXlsx('./'+files.members[0].path, function(err, data) {
		  // if(err) throw err;
		  // for(var i=1,l=data.length;i<l;i++){
		  	// member.addMember(data[i],function(){});
		  // }
		    // data is an array of arrays
		// });
	  res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
	

  	// res.send('respond with a resource');
});

module.exports = router;
