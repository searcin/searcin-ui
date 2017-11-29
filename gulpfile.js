
var bwr = require('./bower.json');
var config = require('./gulp.config')();
var gulp = require('gulp');
var useref = require('gulp-useref');
var babelify = require('babelify');
var browserify = require('browserify');
var vinylSourceStream = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');
var inject = require('gulp-inject');
var mainBowerFiles = require('main-bower-files');
var glob = require('glob');
var browserSync = require('browser-sync');
var spa = require("browser-sync-spa");
var replace = require('gulp-string-replace');
var argv = require('yargs').argv;
var rename = require('gulp-rename');

var cleanCSS = require('gulp-clean-css');
var uncache = require('gulp-uncache');
var gulpif = require('gulp-if');


// Load all gulp plugins into the plugins object.
var plugins = require('gulp-load-plugins')();


var templateCache = require('gulp-angular-templatecache');


browserSync.use(spa({
    selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('env:tmp', function () {
    return gulp.src(config.src.env(argv.env))
        .pipe(rename('env.js'))
        .pipe(gulp.dest(config.tmp.env));
});

gulp.task('fonts:tmp', function () {
    return gulp.src(config.src.fonts)
        .pipe(gulp.dest(config.tmp.fonts));
});


gulp.task('images:tmp', function () {
    return gulp.src(config.src.images)
        .pipe(gulp.dest(config.tmp.images));
});


gulp.task('fonts', function () {
    return gulp.src(config.src.fonts)
        .pipe(gulp.dest(config.webapp.fonts));
});


gulp.task('images', function () {
    return gulp.src(config.src.images)
        .pipe(gulp.dest(config.webapp.images));
});

gulp.task('sass:tmp', function () {

    return gulp.src(config.src.allCss)
        .pipe(plugins.sourcemaps.init({
            loadMaps: true
        }))
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(plugins.concat('app.css'))
        .pipe(plugins.sourcemaps.write('./map/', {
            includeContent: true
        }))
        .pipe(gulp.dest(config.tmp.style));
});

gulp.task('sass:watch', ['sass:tmp'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('scripts:hint', function () {
    return gulp.src(config.src.allJs)
        .pipe(plugins.jshint({
            esnext: true // Enable ES6 support
        }))
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('scripts:tmp', ['scripts:hint'], function () {
    var files = glob.sync(config.src.moduleJs);
    var sources = browserify({
        entries: files,
        debug: true
    })
        .transform(babelify.configure({
            presets: ["es2015"]
        }));

    return sources.bundle()
        .pipe(vinylSourceStream('app.js'))
        .pipe(vinylBuffer())
        .pipe(plugins.sourcemaps.init({
            loadMaps: true
        }))
        .pipe(plugins.ngAnnotate())
        //.pipe(plugins.uglify()) - prod build
        .pipe(plugins.sourcemaps.write('./map/', {
            includeContent: true
        }))
        .pipe(gulp.dest(config.tmp.script));
});

gulp.task('scripts:watch', ['scripts:tmp', 'env:tmp'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('partial:tmp', function () {
    return gulp.src(config.src.templates)
        .pipe(templateCache({
            module: 'searcin'
        }))
        .pipe(gulp.dest(config.tmp.target + '/partials/'));
});

gulp.task('partial:watch', ['partial:tmp'], function (done) {
    browserSync.reload();
    done();
});


gulp.task('index:tmp', function () {
    return gulp.src(config.src.index)
        .pipe(replace("%version%", bwr.version))
        .pipe(gulp.dest(config.tmp.target));
});


gulp.task('index:watch', ['index:tmp'], function(done) {
    browserSync.reload();
    done();
});



gulp.task('inject:tmp', ['index:tmp', 'env:tmp', 'partial:tmp', 'scripts:tmp', 'sass:tmp', 'fonts:tmp', 'images:tmp'], function () {
    return gulp.src(config.tmp.index)
        .pipe(inject(gulp.src(config.tmp.envFile, { read: false }), { name: 'env', relative: true }))
        .pipe(inject(gulp.src(mainBowerFiles('**/*.css'), { read: false }), { name: 'style', relative: true }))
        .pipe(inject(gulp.src(config.tmp.stylefiles, { read: false }), { relative: true }))
        .pipe(inject(gulp.src(mainBowerFiles({
            paths: {
                bowerDirectory: './bower_components',
                bowerJson: './bower.json'
            }
        }), { read: false }), { name: 'bower', relative: true }))
        .pipe(inject(gulp.src(config.tmp.scriptfiles, { read: false }), { relative: true }))
        .pipe(inject(gulp.src(config.tmp.partials, { read: false }), { name: 'partial', relative: true }))
        .pipe(gulp.dest(config.tmp.target));
});


gulp.task('index', ['inject:tmp'], function () {
    return gulp.src(config.tmp.index)
        .pipe(useref())
        .pipe(gulpif("*.js", plugins.uglify()))
        .pipe(gulpif("*.css", cleanCSS()))
        .pipe(uncache())
        .pipe(gulp.dest(config.webapp.target));
});

gulp.task('default', ['index', 'fonts', 'images']);
// , function() {
//     return gulp.src(config.webapp.index)
//         .pipe(replace('href="style','href="admin/style'))
//         .pipe(replace('src="script','src="admin/script'))
//         .pipe(replace('src="env','src="admin/env'))
//         .pipe(gulp.dest(config.webapp.target));
// });

gulp.task('serve', ['inject:tmp'], function () {

    browserSync.instance = browserSync.init({
        startPath: '/',
        port: 4000,
        server: {
            baseDir: ".tmp",
            routes: {
                "/bower_components": "bower_components"
            }
        }
    });
    gulp.watch(config.src.index, ['index:watch']);
    gulp.watch(config.src.allCss, ['sass:watch']);
    gulp.watch(config.src.allJs, ['scripts:watch']);
    gulp.watch(config.src.templates, ['partial:watch']);
});
