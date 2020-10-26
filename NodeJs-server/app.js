const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const port = 1000;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const marketRouter = require('./routes/market');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/market', marketRouter);

app.listen(1000, () => {
    console.log(`Server listen on port ${ port }`);
})

module.exports = app;
