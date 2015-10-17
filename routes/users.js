var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var parseXlsx = require('excel');
 var fs = require("fs") ;
/* GET users listing. */
router.post('/upload',function(req, res, next) {
	var form = new multiparty.Form();
	form.parse(req, function(err, fields, files) {
		fs.writeFile("temp.xlsx",files,function (err) {
	     if (err) throw err ;
	     console.log("File Saved !"); //文件被保存
	 	}) ;
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.send();
    });
	

  	// res.send('respond with a resource');
});

module.exports = router;
