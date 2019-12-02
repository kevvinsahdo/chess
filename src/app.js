
require('app-module-path').addPath(__dirname);
global.appRoot = require('path').resolve(__dirname);

const express = require('express'); 
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const router = require('./routes');
const sass = require('node-sass-middleware');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const csrf = require('csurf');
const session = require('express-session');
const uuid = require('uuid');

const app = express(); 


// Logger
app.use(morgan('short'));

// Cookie Parser
app.use(cookieParser());

// Body Parser
app.use(bodyParser.json({ limit: '64mb' }));
app.use(bodyParser.urlencoded({ limit: '64mb', extended: true }));

app.use(session({
    genid: (req) => {
        return uuid();
    },
    secret: 'PROGWEB',
    resave: false,
    saveUninitialized: true,
}));


// // CSRF
// app.use(csrf({ cookie: true }));

// Routers
app.use(router);

// CSS
app.use('/css', [
    express.static('node_modules/@chrisoakman/chessboardjs/dist/'),
]);

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

app.use('/webfonts',
    express.static('public/webfonts')
)

// Static js files
app.use('/js', [
    express.static('node_modules/jquery/dist/'), 
    express.static('node_modules/popper.js/dist/umd/'), 
    express.static('node_modules/bootstrap/dist/js/'), 
    express.static('node_modules/@chrisoakman/chessboardjs/dist/'),
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