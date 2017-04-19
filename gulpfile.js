'use strict';
 
var gulp    = require('gulp');
var sass    = require('gulp-sass');
var replace = require('gulp-replace');
var fs      = require('fs');


//gera o css a partir do sass
gulp.task('sass', function () {
  return gulp.src('./input/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./output'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
 
//Onde ele encontrar a palavra script ele trocará pelo conteúdo do arquivo script.js
gulp.task('replace', function(){

  var script = fs.readFileSync('./input/script.js', 'utf-8');

  gulp.src(['./input/index.html'])
    .pipe(replace('script', '<script>\n' + script + '\n</script>'))
    .pipe(gulp.dest('./output'));
});

//roda a tarefa padrão
gulp.task('default', ['sass', 'replace']);
