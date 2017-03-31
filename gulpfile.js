var gulp     = require('gulp'),
    bump     = require('gulp-bump'),
    rename   = require('gulp-rename'),
    uglify   = require('gulp-uglify'),
    download = require('gulp-download-stream'),
    shell    = require('gulp-shell');

gulp.task('bump', function () {
  return gulp.src(['wdt-emoji-bundle.js', 'package.json'])
      .pipe(bump({type: 'patch'}))
      .pipe(gulp.dest('./'));
});

gulp.task('create:json', ['get:emojidata'], function () {
  shell.task('php ./build/build.php');
});

gulp.task('get:emojidata', function () {
  return download("https://raw.githubusercontent.com/iamcal/emoji-data/master/emoji_pretty.json", {
    headers: {'User-Agent': 'wdt-emoji-bundle'}
  }).pipe(gulp.dest('./build/'));
});

gulp.task('uglify', function () {
  return gulp.src(['wdt-emoji-bundle.js', 'emoji.js'])
      .pipe(uglify({preserveComments: 'license'}))
      .pipe(rename({suffix: ".min"}))
      .pipe(gulp.dest('./'));
});

gulp.task('build', ['bump', 'uglify']);