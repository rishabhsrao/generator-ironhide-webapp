var gulp = require("gulp");
var CFG = require("./utils/config.js");
var $ = require("gulp-load-plugins")();
var path = require("path");
var pkg = require(path.join("..", CFG.FILE.config.pkg));

/**
 * source
 */
gulp.task("source", [], function() {
  var sources = [
    path.join(CFG.DIR.src, "*.*"),
    path.join(CFG.DIR.src, CFG.DIR.script, CFG.FILE.config.scriptMain),
    path.join(CFG.DIR.src, CFG.DIR.script, CFG.DIR.vendor, "**/*"),
    path.join(CFG.DIR.src, CFG.DIR.font, "**/*")
  ];

  return gulp.src(sources, { base: path.join(CFG.DIR.src) }) // base will ensure that `dist` does not contain the `src` directory.
    .pipe(gulp.dest(path.join(CFG.DIR.dist)));
});
