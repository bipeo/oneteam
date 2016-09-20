var gulp        = require('gulp');
var stylus        = require('gulp-stylus');
gulp.task('stylus', function() {
    return gulp.src('styl/styles.styl')
        .pipe(stylus())
        .pipe(gulp.dest('css'));
});
gulp.task('watch', function() {
    gulp.watch('styl/**/*.styl', ['stylus']);
});

gulp.task('default', ['watch','stylus']);
