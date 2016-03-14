var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var rename = require('gulp-rename');


gulp.task('default', function () {
  gulp.src('src/source.jpg')
    .pipe(imageResize({ 
      width : 320,
      imageMagick: true
    }))
    .pipe(rename('small.jpg'))
    .pipe(gulp.dest('out'));

  gulp.src('src/source.jpg')
    .pipe(imageResize({ 
      width : 640,
      imageMagick: true
    }))
    .pipe(rename('medium.jpg'))
    .pipe(gulp.dest('out'));

  gulp.src('src/source.jpg')
    .pipe(imageResize({ 
      width : 1400,
      imageMagick: true
    }))
    .pipe(rename('large.jpg'))
    .pipe(gulp.dest('out'));

  gulp.src('src/source.jpg')
    .pipe(imageResize({ 
      width : 2560,
      imageMagick: true
    }))
    .pipe(rename('xlarge.jpg'))
    .pipe(gulp.dest('out'));
});
