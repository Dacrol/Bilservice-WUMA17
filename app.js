const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/modeller', function (req, res) {
    res.render('carmodels');
});

app.get('/priser', function (req, res) {
    res.render('prices');
});

app.get('/verkstad', function (req, res) {
    res.render('workshops');
});

app.use(express.static('public/'));

app.listen(3000, function () {
    console.log('Webserver listening on port 3000');
});