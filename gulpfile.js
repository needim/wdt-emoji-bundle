var gulp = require('gulp'),
	bump = require('gulp-bump'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');

gulp.task('bump', function () {
	return gulp.src(['wdt-emoji-bundle.js', 'package.json'])
		.pipe(bump({type: 'patch'}))
		.pipe(gulp.dest('./'));
});

gulp.task('uglify', ['bump'], function() {
	return gulp.src('wdt-emoji-bundle.js')
		.pipe(uglify({preserveComments: 'license'}))
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest('./'));
});

gulp.task('build', ['uglify']);