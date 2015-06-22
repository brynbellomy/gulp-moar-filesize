gulp-moar-filesize
===========

[Gulp](https://github.com/wearefractal/gulp) extension to log filesizes in human readable Strings to the console.

**Now works with Gulp plugins that emit `stream.Readable`s**

    var size = require('gulp-filesize');

Example
-------
    
	gulp.src('./css/*.css')
	//all your gulp tasks
	.pipe(gulp.dest('./dist/')
	.pipe(size()) // [gulp] Size example.css: 265.32 kB  
	

License
-------

MIT