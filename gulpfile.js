const {
  series, src, dest, task,
} = require('gulp');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');
const del = require('delete');

const jsFile = ['./**/*.js', '!./node_modules/**', '!./.history/**'];
const nonJsFile = ['./package.json', './.sequelizerc'];

task('clean', (done) => {
  del.sync('./dist/');
  return done();
});

task('runBabel', () => src(jsFile)
  .pipe(babel({
    presets: [['@babel/env', {
      useBuiltIns: 'usage',
      corejs: 3,
    }]],
    ignore: ['gulpfile.js'],
  }))
  .pipe(dest('dist')));

task('copy', () => src(nonJsFile)
  .pipe(dest('./dist/')));

const serve = (done) => {
  nodemon({
    script: './dist/index.js',
    tasks: ['clean', 'runBabel', 'copy'],
    ignore: ['node_modules/**', 'dist/**', '.history/**'],
  });
  return done();
};

exports.default = series('clean', 'runBabel', 'copy', serve);
