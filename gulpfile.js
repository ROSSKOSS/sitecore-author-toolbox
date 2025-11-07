/* eslint-disable array-element-newline */
/* eslint-disable no-undef */
const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const wait = require("gulp-wait");
const open = require("gulp-open");
const minify = require("gulp-minify");

// Task to minify css using package cleanCSs
gulp.task("minify-css", function () {
  return gulp
    .src(["css/main.css", "css/experienceeditor.css"])
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest("css/"))
    .pipe(wait(750));
  //https://chrome.google.com/webstore/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid
});
gulp.task("watch", function () {
  gulp.watch(["css/*.css", "css/dark/*.css", "css/compact/*.css", "!css/*.min.css"], gulp.series(["minify-css"]));
});

//Default
gulp.task("default", gulp.series(["minify-css", "watch"]));

gulp.task("compress", function () {
  return gulp
    .src(["js/*.js", "!js/*.min.js"])
    .pipe(
      minify({
        ext: {
          min: ".min.js",
        },
        noSource: true,
        ignoreFiles: ["app.js"],
      })
    )
    .pipe(gulp.dest("js/"));
});
