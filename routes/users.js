var express = require('express');
var fs = require('fs');
var router = express.Router();
var Busboy = require('busboy');
/* GET users listing. */
router.post('/upload', function(req, res, next) {
	
	var busboy = new Busboy({ headers: req.headers });

	busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
		var tPath = './files';
      file.pipe(fs.createWriteStream(tPath));
    });
    busboy.on('finish', function() {
      res.writeHead(200, { 'Connection': 'close' });
      res.end("That's all folks!");
    });
    return req.pipe(busboy);




	// var tempPath = req;
	// console.log(tempPath);
	// res.send('respond with a resource');
	// var tPath = './files';
	// fs.rename(tempPath, tPath, function(err) {
 //      if (err) throw err;
 //      // 删除临时文件夹文件, 
 //      fs.unlink(tempPath, function() {
 //         if (err) throw err;
 //         res.send('File uploaded to: ' + tPath + ' - ' + req.files.thumbnail.size + ' bytes');
 //      });
 //    });
	
});

module.exports = router;
