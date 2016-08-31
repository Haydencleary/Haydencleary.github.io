/**
 * Created by hayden on 07/12/15.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('default', function() {
    gulp.start('js', 'css');
});

gulp.task('css', function() {
    return gulp.src(['dev/*.css'])
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('prod'));
});

gulp.task('js', function() {
    return gulp.src(['dev/*.js'])
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('prod'));
});