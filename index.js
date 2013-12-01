var es = require('event-stream');
var gulp = require('gulp');
var chalk = require('chalk');
var getFileSize = require("filesize");

module.exports = function(){
  'use strict';



  return es.map(function(file,callback){
  	var filenameShort = file.shortened;

  	//Check if file.stat exists (gulp.concat removes it for example)
  	var filesize = file.stat ? getFileSize(file.stat.size) : getFileSize(Buffer.byteLength(String(file.contents)));

  	gulp.log("Size "+chalk.cyan(filenameShort)+": "+chalk.magenta(filesize));

  	callback(null,file)
  });

};
