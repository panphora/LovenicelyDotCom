var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var express = require('express');
var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var minimist = require('minimist');
var minifyCss = require('gulp-minify-css');
var buffer = require('gulp-buffer');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster({checksumLength:32});
var runSequence = require('run-sequence');
var nunjucksRender = require('gulp-nunjucks-render');
var del = require('del');

var server;
var options = minimist(process.argv);
var environment = options.environment || 'development';
var isProduction = environment === 'production';

gulp.task('nunjucks', function () {
  nunjucksRender.nunjucks.configure(['src/templates/layouts/']);

  return gulp.src('src/templates/pages/**/*.nunjucks')
    .pipe(nunjucksRender())
    .pipe(cachebust.references())
    .pipe(gulp.dest('dist'))
    .pipe(reload());
});

gulp.task('images', function () {
	return gulp.src('src/images/**/*.{gif,png,jpg}')
		.pipe(imagemin())
		.pipe(cachebust.resources())
		.pipe(gulp.dest('dist/images'))
		.pipe(reload());
});

gulp.task('favicon', function () {
	return gulp.src('src/favicon/**/*.*')
		.pipe(gulp.dest('dist'))
		.pipe(reload());
});

// audio, font
gulp.task('public', function () {
	return gulp.src('src/public/**/*')
		.pipe(gulp.dest('dist'))
		.pipe(reload());
});

gulp.task('styles', function () {
	return gulp.src('src/styles/**/*.sass')
		.pipe(sass({
			sourceComments: isProduction ? false : 'map'
		})).on('error', handleError)
		.pipe(isProduction ? concat() : gutil.noop()) // shouldnt this always run?
		.pipe(isProduction ? minifyCss() : gutil.noop())
		.pipe(cachebust.references())
		.pipe(cachebust.resources())
		.pipe(gulp.dest('dist/styles'))
		.pipe(reload());
});

gulp.task('scripts', function() { 
	return browserify('./src/scripts/main.js', {
		debug: !isProduction
	})
		.bundle().on('error', handleError)
		.pipe(source('bundle.js'))
		.pipe(isProduction ? buffer() : gutil.noop())
		.pipe(isProduction ? uglify() : gutil.noop())
		.pipe(cachebust.resources())
		.pipe(gulp.dest('dist/scripts'))
		.pipe(reload());
});

gulp.task('server', function () {
	server = express();
	server.use(express.static('dist'));
	server.listen(8000);
	browserSync({ proxy: 'localhost:8000' });
});

gulp.task('build', function (done) {
	runSequence('favicon', 'public', 'images', 'styles', 'scripts', 'nunjucks', done);
});

gulp.task('clean:images', function () {
	return del([
		'dist/images/**/*'
	]);
});

gulp.task('clean:styles', function () {
	return del([
		'dist/styles/**/*'
	]);
});

gulp.task('clean:scripts', function () {
	return del([
		'dist/scripts/**/*'
	]);
});

gulp.task('clean:favicon', function () {
	return del([
		'dist/public/**/*'
	]);
});

gulp.task('clean:public', function () {
	return del([
		'dist/public/**/*'
	]);
});

gulp.task('clean:all', function () {
	return del([
		'dist/**/*'
	]);
});

gulp.task('watch', function () {
	gulp.watch('src/templates/**/*.nunjucks', ['nunjucks']);

	gulp.watch('src/images/**/*.{gif,png,jpg}', function () {
		runSequence('clean:images', 'images', 'nunjucks');
	});

	gulp.watch('src/favicon/**/*', function () {
		runSequence('clean:favicon', 'favicon', 'nunjucks');
	});

	gulp.watch('src/public/**/*', function () {
		runSequence('clean:public', 'public', 'nunjucks');
	});

	gulp.watch('src/styles/**/*.sass', function () {
		runSequence('clean:styles', 'styles', 'nunjucks');
		reload();
	});

	gulp.watch('src/scripts/**/*.js', function () {
		runSequence('clean:scripts', 'scripts', 'nunjucks');
	});
});

gulp.task('default', function (done) {
	runSequence('clean:all', 'build', 'watch', 'server', done);
});



function handleError (error) {
	console.log(error.toString());
	this.emit('end');
}

function reload () {
	if (server) {
		return browserSync.stream();
	}

	return gutil.noop();
}



