const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const controllers = require('./controllers/index');

const app = express();

// middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.engine(
    'hbs',
    handlebars({
        layoutsDir: path.join(__dirname, 'views', 'layouts'),
        partialsDir: path.join(__dirname, 'views', 'partials'),
        defaultLayout: 'main.hbs',
    }),
);

app.set('port', process.env.PORT || 3000);
app.use(controllers);

module.exports = app;
