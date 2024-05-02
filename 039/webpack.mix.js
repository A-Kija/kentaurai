let mix = require('laravel-mix');

mix
.js('src/app.js', 'public')
.copy('src/index.html', 'public/index.html');