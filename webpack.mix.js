let mix = require('laravel-mix');

mix
   .js('src/scripts/main.js', 'dist/scripts/')
   .setPublicPath('dist')
   .postCss('src/styles/main.css', 'dist/styles/')

   .browserSync({
      server: true
   })
;


