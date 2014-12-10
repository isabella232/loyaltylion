/**
* The MIT License (MIT)
*
* Copyright (c) 2014 LoyaltyLion
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*
* @author    LoyaltyLion <support@loyaltylion.com>
* @copyright 2012-2014 LoyaltyLion
* @license   http://opensource.org/licenses/MIT  The MIT License
*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('css', function () {
  gulp.src('./css/loyaltylion.scss')
    .pipe(sass())
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(csso())
    .pipe(rename('loyaltylion.min.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('js', function () {
  gulp.src('./js/loyaltylion.js')
    .pipe(uglify())
    .pipe(rename('loyaltylion.min.js'))
    .pipe(gulp.dest('./js'));
});

gulp.task('watch', function () {
  gulp.watch('./css/loyaltylion.scss', ['css']);
  gulp.watch('./js/loyaltylion.js', ['js']);
});

gulp.task('default', ['css', 'js']);