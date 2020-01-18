const { src, dest, watch, series, parallel } = require("gulp");

const sass = require("gulp-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const files = {
  scssPath: "src/blocks/style.scss",
  jsPath: "src/blocks/**/*.js"
};

const dist = {
  css: "build/",
  js: "build/"
};

function scssTask() {
  return src(files.scssPath)
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(concat("style.css"))
    .pipe(dest(dist.css));
}

function jsTask() {
  return src([files.jsPath])
    .pipe(concat("script.js"))
    .pipe(dest(dist.js));
}

function watchTask() {
  watch(
    ["src/blocks/**/*.scss", files.jsPath],
    series(parallel(scssTask, jsTask))
  );
}

exports.watch = watchTask;
exports.default = series(parallel(scssTask, jsTask));
