let mix = require('laravel-mix');

mix.js('src/js/site.js', 'dist')
    .sass('src/scss/site.scss', '/', {}, [
     require("tailwindcss"),
    ])
    .setPublicPath('dist');