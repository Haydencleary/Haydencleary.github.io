const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const babel = require('gulp-babel');

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
        .pipe(babel({presets: ['es2015']}))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('prod'));
});
