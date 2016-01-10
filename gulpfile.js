'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	babel = require('gulp-babel'),
	sass = require('gulp-sass'),
	electron = require('electron-prebuilt'),
	childProcess = require('child_process');

gulp.task('index', function() {
	return gulp.src('source/index.html')
		.pipe(gulp.dest('build/'));
});

//TODO probably a better way to insert these dependencies
gulp.task('foundation', function() {
	return gulp.src('node_modules/foundation-sites/dist/*.min.*')
		.pipe(gulp.dest('build/vendor'));
});

gulp.task('jquery', function() {
	return gulp.src('node_modules/jquery/dist/jquery.min.js')
		.pipe(gulp.dest('build/vendor'));
});

gulp.task('sass', function() {
	gulp.src('source/**/*.scss')
		.pipe(sass())
		.pipe(concat('app.css'))
		.pipe(gulp.dest('build/css'))
});

gulp.task('babel', function() {
	return gulp.src(['source/**/*.jsx', 'source/**/*.js'])
		.pipe(babel({
			presets: ['react', 'es2015']
		}))
		.pipe(gulp.dest('build/'));
});

gulp.task('watch', function() {
	gulp.watch(['source/**/*.jsx', 'source/**/*.js'], ['babel']);
	gulp.watch(['source/**/*.scss'], ['sass']);
	gulp.watch(['source/index.html'], ['index']);
});


gulp.task('electron', ['watch', 'index', 'foundation', 'jquery', 'sass', 'babel'], function() {
	childProcess.spawn(electron, ['build/'], {
		stdio: 'inherit'
	});
});

gulp.task('run', ['electron']);
