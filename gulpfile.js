'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	babel = require('gulp-babel'),
	sass = require('gulp-sass'),
	electron = require('electron-prebuilt'),
	childProcess = require('child_process');

gulp.task('index', function() {
	return gulp.src('source/index.html')
		.pipe(gulp.dest('./build'));
});

gulp.task('sass', function() {
	gulp.src('./source/**/*.scss')
		.pipe(sass())
		.pipe(concat('app.css'))
		.pipe(gulp.dest('./build/css'))
});

gulp.task('babel', function() {
	return gulp.src(['source/**/*.jsx', 'source/**/*.js'])
		.pipe(babel({
			presets: ['react']
		}))
    .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
	gulp.watch(['source/**/*.jsx', 'source/**/*.js'], ['babel']);
	gulp.watch(['source/**/*.scss'], ['sass']);
	gulp.watch(['source/index/html'], ['index']);
});


gulp.task('electron', function() {
	childProcess.spawn(electron, ['./build/'], {
		stdio: 'inherit'
	});
});

gulp.task('run', ['watch', 'index', 'sass', 'babel', 'electron']);
