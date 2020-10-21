// 导包
const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const del = require('del')
const webserver = require('gulp-webserver');

// 方法
const cssHandler = () => {
    return gulp.src('./src/css/*.css')
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'))
}

const imgHandler = () => {
    return gulp.src('./src/images/**/*.*')
        .pipe(gulp.dest('./dist/images'))
}

const jsHandler = () => {
    return gulp.src('./src/js/*.js')
        // es6转es5
        .pipe(babel({
            presets: ['@babel/env']
        }))
        // 压缩代码
        .pipe(uglify())
        // 写入到dist的js文件夹里面
        .pipe(gulp.dest('./dist/js'))
}

const libHandler = () => {
    return gulp.src('./src/lib/**/*.*')
        .pipe(gulp.dest('./dist/lib'))
}

const htmlHandler = () => {
    return gulp.src('./src/pages/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            removeComments: true,
            minifyCSS: true,
            minifyJS: true,
        }))
        .pipe(gulp.dest('./dist/pages'))
}

const delHandler = () => {
    return del(['./dist'])
}

const watchHanlder = () => {
    gulp.watch('./src/css/*.css', cssHandler);
    gulp.watch('./src/images/**/*.*', imgHandler);
    gulp.watch('./src/js/*.js', jsHandler)
    gulp.watch('./src/lib/**/*.*', libHandler)
    gulp.watch('./src/pages/*.html', htmlHandler)
}

const serverHandler = () => {
    return gulp.src('./dist')
        .pipe(webserver({
            port: 8080,
            open: './pages/index.html',
            livereload: true,
            proxies: [
                {
                    source: '/weather',
                    target: 'https://way.jd.com/jisuapi/weather'

                }
            ]
        }))
}

module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(
        cssHandler,
        imgHandler,
        jsHandler,
        libHandler,
        htmlHandler
    ),
    serverHandler,
    watchHanlder
)

