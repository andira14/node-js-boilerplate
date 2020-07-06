const {series, watch, src, dest} = require('gulp');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');
const del = require('delete');

const jsFile = ['./**/*.js', '!./node_modules/**', '!./.history/**']
const nonJsFile = ['./package.json', './.sequelizerc']

const clean = (done) => {
    del.sync('./dist/');
    return done();
}

const runBabel = () => {
    return src(jsFile)
    .pipe(babel({
        presets: ["@babel/env"],
        ignore: ["gulpfile.js"]
    }))
    .pipe(dest('dist'))
}

const copy = () => {
    return src(nonJsFile)
    .pipe(dest('./dist/'));
}

const serve = (done) => {
    nodemon({
        script: './dist/index.js'
    })
    return done()
}

exports.default =  series(clean, runBabel, copy, serve);
