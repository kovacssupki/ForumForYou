'use strict';
var //Required
    args = require('yargs').argv,
    concat = require('gulp-concat'),
    del = require('del'),
    gulp = require('gulp'),
    gulpif = require('gulp-if'),
    linker = require('gulp-linker'),
    ngAnnotate = require('gulp-ng-annotate'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    sass = require('gulp-ruby-sass'),
    cssmin = require('gulp-cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    // Folders
    frontend_SRC_SCSS = 'src/sass',
    frontend_EXPORT_CSS = 'public/css',
    frontend_SRC_JS = 'src/js',
    frontend_EXPORT_JS = 'public/js',
    // File
    frontend_MINIFIEDCSS = 'styles.min.css',
    frontend_MINIFIEDJS = 'app.min.js';
// Concat and minified JS files into mapple.min.js
gulp.task('minifyJS', function() {
    return gulp.src([frontend_SRC_JS + '/**/module.js', frontend_SRC_JS + '/**/*.js'])
        .pipe(gulpif(args.production, sourcemaps.init()))
        .pipe(gulpif(args.production, concat(frontend_MINIFIEDJS)))
        .pipe(gulpif(args.production, ngAnnotate()))
        .pipe(gulpif(args.production, uglify()))
        .pipe(gulpif(args.production, sourcemaps.write()))
        .pipe(gulpif(args.production, gulp.dest(frontend_EXPORT_JS)));
});
// Link JS files into index.html
gulp.task('linkJS', function() {
    var isProduction = args.production;
    return gulp.src('./public/index.html')
        .pipe(linker({
            scripts: isProduction ?
                [(frontend_EXPORT_JS + '/' + frontend_MINIFIEDJS)] :
                [
                    // Force the order of files to link
                    (frontend_SRC_JS + '/app.js'),
                    (frontend_SRC_JS + '/**/*.js')
                ],
            startTag: '<!-- APP -->',
            endTag: '<!-- END APP -->',
            fileTmpl: isProduction ? '<script src="%s"></script>' : '<script src="../%s"></script>',
            appRoot: 'public/'
        }))
        .pipe(gulp.dest('./public/'));
});
// Default task to compile (minified and link) JS files
gulp.task('js', function(callback) {
    args['js'] = 'js'; // Force --js argument if it's not provided
    runSequence(
        'clean',
        'minifyJS',
        'linkJS',
        callback
    );
});
// Comiple SASS files
gulp.task('compileSASS', function() {
    return sass(frontend_SRC_SCSS + '/styles.scss', { sourcemap: true })
        .on('error', function(err) {
            console.error('Error!', err.message);
        })
        .pipe(gulpif(args.production, sourcemaps.init()))
        .pipe(gulpif(args.production, cssmin()))
        .pipe(sourcemaps.write({
            includeContent: false,
            sourceRoot: '/' + frontend_SRC_SCSS
        }))
        .pipe(gulpif(args.production, rename({suffix: '.min'})))
        .pipe(gulp.dest(frontend_EXPORT_CSS));
});
// Link CSS files into index.html
gulp.task('linkCSS', function() {
    var isProduction = args.production;
    return gulp.src('./public/index.html')
        .pipe(linker({
            scripts: isProduction ?
                [(frontend_EXPORT_CSS + '/' + frontend_MINIFIEDCSS)] :
                [(frontend_EXPORT_CSS + '/styles.css')],
            startTag: '<!-- MAIN STYLE -->',
            endTag: '<!-- END MAIN STYLE -->',
            fileTmpl: '<link href="%s" rel="stylesheet"/>',
            appRoot: 'public/'
        }))
        .pipe(gulp.dest('./public/'));
});
// Default task to compile (minified and link) SASS files
gulp.task('sass', function(callback) {
    args['css'] = 'css'; // Force --js argument if it's not provided
    runSequence(
        'clean',
        'compileSASS',
        'linkCSS',
        callback
    );
});
// Clean Task
gulp.task('clean', function() {
    var cleanALL = function() {
            del.sync([frontend_EXPORT_JS, frontend_EXPORT_CSS]);
        },
        cleanONE = function(folder) {
            del.sync([folder]);
        };
    if (!args.js && !args.css) {
        return cleanALL();
    } else {
        return args.js ? cleanONE(frontend_EXPORT_JS) : cleanONE(frontend_EXPORT_CSS);
    }
});
// Default Task
gulp.task('default', function(callback) {
    runSequence(
        'clean',
        'compileSASS',
        'linkCSS',
        'minifyJS',
        'linkJS',
        callback
    );
});
//Watch task
gulp.task('watch',function() {
    gulp.watch(frontend_SRC_SCSS + '/**/*.scss',['sass']);
    gulp.watch(frontend_SRC_JS + '/**/*.js',['js']);
});

// 'use strict';
// var //Required
//     args = require('yargs').argv,
//     concat = require('gulp-concat'),
//     del = require('del'),
//     gulp = require('gulp'),
//     gulpif = require('gulp-if'),
//     linker = require('gulp-linker'),
//     ngAnnotate = require('gulp-ng-annotate'),
//     rename = require('gulp-rename'),
//     runSequence = require('run-sequence'),
//     sass = require('gulp-ruby-sass'),
//     cssmin = require('gulp-cssnano'),
//     sourcemaps = require('gulp-sourcemaps'),
//     uglify = require('gulp-uglify'),
//     gulpFilter = require('gulp-filter'),
//     bower = require('main-bower-files'),
//     // Folders
//     frontend_SRC_SCSS = 'src/sass',
//     frontend_VENDOR_CSS = 'bower_components',
//     frontend_VENDOR_EXPORT_CSS = 'public/css/vendor',
//     frontend_EXPORT_CSS = 'public/css',
//     frontend_SRC_JS = 'src/js',
//     frontend_VENDOR_JS = 'bower_components',
//     frontend_EXPORT_JS = 'public/js',
//     // File
//     frontend_MINIFIEDCSS = 'styles.min.css',
//     frontend_MINIFIEDVENDORCSS = 'vendor.min.css',
//     frontend_MINIFIEDVENDORJS = 'vendor.min.js',
//     frontend_MINIFIEDJS = 'app.min.js';
// // Concat and minified JS files into mapple.min.js
// gulp.task('minifyJS', function() {
//     return gulp.src([frontend_SRC_JS + '/**/module.js', frontend_SRC_JS + '/**/*.js'])
//         .pipe(gulpif(args.production, sourcemaps.init()))
//         .pipe(gulpif(args.production, concat(frontend_MINIFIEDJS)))
//         .pipe(gulpif(args.production, ngAnnotate()))
//         .pipe(gulpif(args.production, uglify()))
//         .pipe(gulpif(args.production, sourcemaps.write()))
//         .pipe(gulpif(args.production, gulp.dest(frontend_EXPORT_JS)));
// });
// gulp.task('minifyBowerCSS', function() {
//     return gulp.src([frontend_VENDOR_CSS + '/**/*.css', frontend_VENDOR_CSS + '/**/*.css'])
//     .pipe(gulpif(args.production, sourcemaps.init()))
//     .pipe(gulpif(args.production, cssmin()))
//     .pipe(sourcemaps.write({
//         includeContent: false,
//         sourceRoot: '/' + frontend_VENDOR_CSS
//     }))
//     .pipe(gulpif(args.production, rename({suffix: '.min'})))
//     .pipe(gulp.dest(frontend_VENDOR_EXPORT_CSS));
// });
// gulp.task('generateBower', function() {
//   var jsFilter = gulpFilter('**/*.js');
//   return gulp.src(bower())
//     .pipe(jsFilter)
//     .pipe(gulp.dest('public/js/vendor'));
// })
// // Link JS files into index.html
// gulp.task('linkJS', function() {
//     var isProduction = args.production;
//     return gulp.src('./public/index.html')
//         .pipe(linker({
//             scripts: isProduction ?
//                 [(frontend_EXPORT_JS + '/' + frontend_MINIFIEDJS)] :
//                 [
//                     // Force the order of files to link
//                     (frontend_SRC_JS + '/app.js'),
//                     (frontend_SRC_JS + '/**/*.js')
//                 ],
//             startTag: '<!-- APP -->',
//             endTag: '<!-- END APP -->',
//             fileTmpl: isProduction ? '<script src="%s"></script>' : '<script src="../%s"></script>',
//             appRoot: 'public/'
//         }))
//         .pipe(gulp.dest('./public/'));
// });
// gulp.task('linkBowerJS', function() {
//     var isProduction = args.production;
//     return gulp.src('./public/index.html')
//         .pipe(linker({
//             scripts: isProduction ?
//                 [(frontend_JS + '/' + frontend_MINIFIEDVENDORJS)] :
//                 [
//                     // Force the order of files to link
//                     (frontend_EXPORT_JS + '/**/*.js')
//                 ],
//             startTag: '<!-- BOWER -->',
//             endTag: '<!-- END BOWER -->',
//             fileTmpl: isProduction ? '<script src="%s"></script>' : '<script src="../public/%s"></script>',
//             appRoot: 'public/'
//         }))
//         .pipe(gulp.dest('./public/'));
// });
// // Default task to compile (minified and link) JS files
// gulp.task('js', function(callback) {
//     args['js'] = 'js'; // Force --js argument if it's not provided
//     runSequence(
//         'clean',
//         'minifyJS',
//         'linkJS',
//         callback
//     );
// });
// // Comiple SASS files
// gulp.task('compileSASS', function() {
//     return sass(frontend_SRC_SCSS + '/styles.scss', { sourcemap: true })
//         .on('error', function(err) {
//             console.error('Error!', err.message);
//         })
//         .pipe(gulpif(args.production, sourcemaps.init()))
//         .pipe(gulpif(args.production, cssmin()))
//         .pipe(sourcemaps.write({
//             includeContent: false,
//             sourceRoot: '/' + frontend_SRC_SCSS
//         }))
//         .pipe(gulpif(args.production, rename({suffix: '.min'})))
//         .pipe(gulp.dest(frontend_EXPORT_CSS));
// });
// // Link CSS files into index.html
// gulp.task('linkCSS', function() {
//     var isProduction = args.production;
//     return gulp.src('./public/index.html')
//         .pipe(linker({
//             scripts: isProduction ?
//                 [(frontend_EXPORT_CSS + '/' + frontend_MINIFIEDCSS)] :
//                 [(frontend_EXPORT_CSS + '/styles.css')],
//             startTag: '<!-- MAIN STYLE -->',
//             endTag: '<!-- END MAIN STYLE -->',
//             fileTmpl: '<link href="%s" rel="stylesheet"/>',
//             appRoot: 'public/'
//         }))
//         .pipe(gulp.dest('./public/'));
// });
// gulp.task('linkBowerCSS', function() {
//     var isProduction = args.production;
//     return gulp.src('./public/index.html')
//         .pipe(linker({
//             scripts: isProduction ?
//                 [(frontend_VENDOR_EXPORT_CSS + '/' + frontend_MINIFIEDCSS)] :
//                 [
//                   (frontend_VENDOR_EXPORT_CSS + '/**/*.css')
//                 ],
//             startTag: '<!-- BOWER STYLE -->',
//             endTag: '<!-- END BOWER STYLE -->',
//             fileTmpl: '<link href="%s" rel="stylesheet"/>',
//             appRoot: 'public/'
//         }))
//         .pipe(gulp.dest('./public/'));
// });
// // Default task to compile (minified and link) SASS files
// gulp.task('sass', function(callback) {
//     args['css'] = 'css'; // Force --js argument if it's not provided
//     runSequence(
//         'clean',
//         'compileSASS',
//         'linkCSS',
//         callback
//     );
// });
// // Clean Task
// gulp.task('clean', function() {
//     var cleanALL = function() {
//             del.sync([frontend_EXPORT_JS, frontend_EXPORT_CSS]);
//         },
//         cleanONE = function(folder) {
//             del.sync([folder]);
//         };
//     if (!args.js && !args.css) {
//         return cleanALL();
//     } else {
//         return args.js ? cleanONE(frontend_EXPORT_JS) : cleanONE(frontend_EXPORT_CSS);
//     }
// });
// // Default Task
// gulp.task('default', function(callback) {
//     runSequence(
//         'clean',
//         'compileSASS',
//         'linkCSS',
//         'minifyJS',
//         'linkJS',
//         'minifyBowerCSS',
//         'linkBowerCSS',
//         'generateBower',
//         'linkBowerJS',
//         callback
//     );
// });
// //Watch task
// gulp.task('watch',function() {
//     gulp.watch(frontend_SRC_SCSS + '/**/*.scss',['sass']);
//     gulp.watch(frontend_SRC_JS + '/**/*.js',['js']);
// });
