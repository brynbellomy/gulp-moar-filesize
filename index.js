var map = require('map-stream');
var gutil = require('gulp-util');
var getFileSize = require("filesize");
var stream = require('stream');

module.exports = function() {
    'use strict';

    return map(function(file, callback) {
        var filenameShort = file.path.split(/\/|\\/).pop()

        //Check if file.stat exists (gulp.concat removes it for example)
        if (file.contents instanceof stream.Readable) {
            var totalSize = 0;
            file.contents
                .on('data', function (chunk) {
                    totalSize += chunk.length;
                })
                .on('end', function() {
                    printSizeAndReturn(totalSize, file, filenameShort, callback);
                });
        }
        else {
            var totalSize = (!nullish(file.stat) && !nullish(file.stat.size) && !isNaN(file.stat.size)) {
                                ? file.stat.size
                                : Buffer.byteLength(file.contents.toString('utf8'));

            printSizeAndReturn(totalSize, file, filenameShort, callback);
        }
    });
};

function nullish(val) {
    return val === null || val === undefined
}

function printSizeAndReturn (filesize, file, filenameShort, callback) {
    filesize = getFileSize(filesize)
    gutil.log('Size', gutil.colors.cyan(filenameShort), ":", gutil.colors.magenta(filesize));
    callback(null, file);
}
