var gulp          = require('gulp');
var sass          = require('gulp-ruby-sass');
var plumber       = require('gulp-plumber');
var uglify        = require('gulp-uglify');
var imagemin      = require('gulp-imagemin');
var autoprefixer  = require('gulp-autoprefixer');
var nodemon       = require('gulp-nodemon');
var browserSync   = require('browser-sync');


// Runs all gulp tasks in specified order
gulp.task('default', ['sass', 'scripts', 'imgs', 'browser-sync'], function(){});

// compiles sass to css
gulp.task('sass', function() {
    return sass('public/sass/main.sass')
          .pipe(plumber())
          .pipe(autoprefixer({
            browser: ['last 2 versions'],
            cascade: false
          }))
          .pipe(gulp.dest('public/css/'))
          .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function(){
  return gulp.src('./public/js/functions.js')
              .pipe(plumber())
              .pipe(uglify())
              .pipe(gulp.dest('./public/min-js/'))
              .pipe(browserSync.reload({stream: true}));
});

gulp.task('imgs', function(){
  return gulp.src('./src/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/imgs/'));
});

// starts server and spins up client view on port 7000 while node port is 4000
gulp.task('browser-sync', ['nodemon'], function(){

  browserSync.init(null, {
    proxy: 'http://localhost:4000',
    files: ['views/index.pug'],
    browser: 'google chrome',
    port: 7000
  });

  // watches for changes to files with specified extensions
  gulp.watch('./**/*.sass', ['sass']);
  gulp.watch('public/js/*.js', ['scripts']);
  gulp.watch('./**/*.pug').on('change', browserSync.reload);
});


gulp.task('nodemon', function() {
  var started = false;

	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true;
		}
	});
})
