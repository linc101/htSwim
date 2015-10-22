var express = require('express');
var router = express.Router();
var util = require('util');
var multiparty = require('multiparty');
var parseXlsx = require('excel');
 var fs = require("fs") ;
/* GET users listing. */
router.post('/upload',function(req, res, next) {
	var form = new multiparty.Form({
		autoFiles:true,
		uploadDir:'./temp'
	});
	form.parse(req, function(err, fields, files) {
		parseXlsx('./'+files.members[0].path, function(err, data) {
		  if(err) throw err;
		  console.log(data.length);
		    // data is an array of arrays
		});
	  res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
	

  	// res.send('respond with a resource');
});

module.exports = router;
