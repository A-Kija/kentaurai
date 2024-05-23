let mix = require('laravel-mix');

mix
.sass('src/style.scss', 'public')
.js('src/app.js', 'public');