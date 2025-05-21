let mix = require('laravel-mix');

mix
   .js('src/scripts/main.js', 'dist/scripts/')
   .setPublicPath('dist')
   .postCss('src/styles/main.css', 'dist/styles/')
   .copy('src/assets/fonts/froles.otf', 'dist/fonts/')

   .browserSync({
      server: true
   })
;


