/**
 * Ord&Bild Gulpfile
 * Version 1.2
 */
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-ruby-sass');

gulp.task('sass', function() {
	return gulp.src('assets/scss**/*.scss')
		.pipe(sass({ style: 'expanded' }))
		.pipe(gulp.dest('assets/css'))
		.pipe(rename({suffix: '.min'}))
	    .pipe(minifycss())
	    .pipe(gulp.dest('assets/css'));
});

gulp.task('styles', function() {
	return gulp.src([
			'assets/css/',
		])
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('assets/css'))
		.pipe(rename({suffix: '.min'}))
	    .pipe(minifycss())
	    .pipe(gulp.dest('assets/css'));
});

gulp.task('scripts', function() {
	return gulp.src([
		'assets/js/',
		'assets/js/'
		])
	    .pipe(concat('scripts.js'))
	    .pipe(gulp.dest('assets/js'))
	    .pipe(rename({suffix: '.min'}))
	    .pipe(uglify())
	    .pipe(gulp.dest('assets/js'));
});

gulp.task('images', function() {
	return gulp.src('assets/img/**/*')
	    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
	    .pipe(gulp.dest('assets/img'))
});

gulp.task('watch', function() {
	gulp.watch('assets/scss/**/*.scss', ['sass']);
});