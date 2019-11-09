
require('app-module-path').addPath(__dirname);
global.appRoot = require('path').resolve(__dirname);

const express = require('express'); 
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const router = require('./routes');
const sass = require('node-sass-middleware');

const app = express(); 

// Logger
app.use(morgan('short'));

// Routers
app.use(router);

// Sass
app.use(sass({
    src: 'public/scss',
    dest: 'public/css',
    debug: true,
    outputStyle: 'compressed',
    prefix: '/css',
    force: true,
}))

// Images files
app.use('/img',
    express.static('public/img')
)

// Static js files
app.use('/js', [
    express.static('node_modules/jquery/dist/'), 
    express.static('node_modules/popper.js/dist/umd/'), 
    express.static('node_modules/bootstrap/dist/js/'), 
    express.static('node_modules/@chrisoakman/dist/'),
    express.static('node_modules/chess.js/'),
    express.static('public/js')
])

// Views engine
app.engine('handlebars', handlebars({
    helpers: require('helpers/handlebars.js'),
    layoutsDir: 'src/views/layouts',
    defaultLayout: 'default',
}));

app.set('view engine', 'handlebars');
app.set('views', 'src/views');


app.listen(process.env.APP_PORT, () => { 
    console.log('Express app iniciada na porta ' + process.env.APP_PORT); 
});