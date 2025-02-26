const { src, dest, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));

function css() {
    return src('./public/scss/*.scss')
        .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
        .pipe(dest('./public/css/'));
};

exports.buildCss = css;

exports.watch = function () {
    watch('./public/scss/*.scss', css);
}