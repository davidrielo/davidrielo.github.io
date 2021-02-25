/**
 * Created by davidrielo on 14/04/2019.
 */
'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var imageop = require('gulp-image-optimization');
var pump = require('pump');



const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];


// Gulp task to minify CSS files
gulp.task('styles', function () {
    return gulp.src('./src/css/*.css')
    // Auto-prefix css styles for cross browser compatibility
        //.pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
        // Minify the file
        .pipe(minifyCSS())
        //.pipe(rename('style.min.css'))
        .pipe(csso())
        // Output
        .pipe(gulp.dest('./docs/css'))
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
    return gulp.src('./src/js/**/*.js')
    // Minify the file
        .pipe(uglify())
        // Output
        .pipe(gulp.dest('./docs/js'))
});

// Gulp task to minify HTML files
gulp.task('pages', function() {
    return gulp.src(['./src/**/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./docs'));
});


gulp.task('images', function(cb) {
    gulp.src(['src/**/*.png','src/**/*.jpg','src/**/*.gif','src/**/*.jpeg','src/**/*.svg'])
        // .pipe(imageop({
        //     optimizationLevel: 5,
        //     progressive: true,
        //     interlaced: true
        // }))
        .pipe(gulp.dest('./docs/')).on('end', cb).on('error', cb);
});

gulp.task('fonts', function(cb) {
    gulp.src(['src/fonts/*'])
        .pipe(gulp.dest('./docs/fonts/')).on('end', cb).on('error', cb);
});


gulp.task('files', function(cb) {
    gulp.src(['src/downloads/*'])
        .pipe(gulp.dest('./docs/downloads/')).on('end', cb).on('error', cb);
});

gulp.task('php', function(cb) {
    gulp.src(['src/**/*.php'])
        .pipe(gulp.dest('./docs/')).on('end', cb).on('error', cb);
});

gulp.task('script-debug', function (cb) {
    pump([
        gulp.src('src/**/*.js'),
        uglify(),
        gulp.dest('./docs/')
    ], cb);
});

// Clean output directory
gulp.task('clean', function () {
    del(['docs'])
});

// Gulp task to minify all files
gulp.task('default', ['clean'], function () {
    runSequence(
        'styles',
        'scripts',
        'php',
        'fonts',
        'pages',
        'images',
        'files'
    );
});