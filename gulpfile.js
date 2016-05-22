var gulp = require('gulp');
var watch = require('gulp-watch');
var shell = require('gulp-shell')

var sass = require('gulp-sass');


var paths = {
	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json'],
	'style': {
		all: './public/styles/**/*.scss',
		output: './public/styles/'
	},
	libraries: {
		origin: ['./node_modules/async/dist/async.min.js'],
		destination: './public/js/lib/'
	}
};


gulp.task('watch:sass', function () {
	gulp.watch(paths.style.all, ['sass']);
});

gulp.task('sass', function(){
	gulp.src(paths.style.all)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(paths.style.output));
});

gulp.task('libraries', function() {
	gulp.src(paths.libraries.origin)
		.pipe(gulp.dest(paths.libraries.destination));
})


gulp.task('runKeystone', shell.task('node keystone.js'));
gulp.task('watch', [

  'watch:sass'

]);

gulp.task('default', ['watch', 'runKeystone']);
