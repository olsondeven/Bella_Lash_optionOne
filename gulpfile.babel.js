import gulp from 'gulp';
import concat from 'gulp-concat'; //bundles files
import sass from 'gulp-sass'; //sass compiling/translating
import babel from 'gulp-babel'; //es6 translating
import plumber from 'gulp-plumber'; //gives errors for compiling
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import del from 'del';
import print from 'gulp-print';
import uglify from 'gulp-uglify';
import CacheBuster from "gulp-cachebust";
var cachebust = new CacheBuster();

const paths = {
    scssSource: './styles/**/*.scss',
    scssDest: './compiled/styles',
    jsSource: './app/**/*.js',
    jsDest: './compiled/js'
};
//delete compile file
gulp.task("clean", function(cb){
  del([paths.jsDest,paths.scssDest],cb)
})
//sourcemaps
//cachebust
gulp.task('build-css', () => {
    return gulp.src(paths.scssSource)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cachebust.resources())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(paths.scssDest));
});

gulp.task('build-js', () => {
    return gulp.src(paths.jsSource)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(print())
        .pipe(babel({presets: ["es2015"]}))
        .pipe(concat('bundle.js'))
        //.pipe(sourcemaps.write("./"))
        //.pipe(gulp.dest(paths.jsDest))
        //.pipe(rename('bundle.min.js'))
        //.pipe(uglify())  //keep commented out until ready to ship
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(paths.jsDest));
});

gulp.task("build", ["build-css", "build-js"], function(){
  return gulp.src("index.html")
      .pipe(cachebust.references())
      .pipe(gulp.dest(paths.jsDest));
})

gulp.task('watch', () => {
    gulp.watch(paths.jsSource, ['build-js']);
    gulp.watch(paths.scssSource, ['build-css']);
});

gulp.task('default', ['build-js', 'build-css', 'watch']);
