
require('app-module-path').addPath(__dirname);
global.appRoot = require('path').resolve(__dirname);

const express = require('express'); 
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const router = require('./routes');

const app = express(); 

app.use(morgan('short'));
app.use(router);

app.use('/img', [
    express.static('/public/img')
])

app.engine('handlebars', handlebars({
    helpers: require('helpers/handlebars.js'),
    layoutsDir: 'src/views/layouts',
    defaultLayout: 'default',
}));

app.set('view engine', 'handlebars');
app.set('views', 'src/views');


app.listen(3000, () => { 
    console.log('Express app iniciada na porta 3000.'); 
});