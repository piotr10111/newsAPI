'use strict';
const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const htmlmin = require("gulp-htmlmin");
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const terser = require('gulp-terser');
var pump = require('pump');


sass.compiler = require('node-sass');

const dist = 'dist'

gulp.task('default', [ 'sass:watch','sass','html', 'script'])

gulp.task('sass',  function() {
    return gulp.src('./src/scss/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(concat('style.css'))
      .pipe(gulp.dest(dist+'/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/scss/*.scss', ['sass']);
});

gulp.task('js', function(){
    return gulp.src('./src/scripts/*.js') 
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest(dist+'/js'));
});

gulp.task('script', function (cb) {
    pump([
      gulp.src('src/scripts/*.js'),
      terser(),
      concat('bundle.js'),
      gulp.dest(dist+'/js')
    ], cb);
  });

gulp.task('html', function() {
    return gulp.src('*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest(dist));
  });

gulp.task('image', () =>
    gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(dist+'/images'))
);

