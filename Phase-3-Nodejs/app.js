
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const userRoutes = require('./api/routes/users');
const articleRoutes = require('./api/routes/articles');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Conrol-Allow-Origin', '*');
    res.header(
        'Access-Conrol-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Authorization'
     );
     if(req.method === 'OPTIONS'){
         res.header('Access-Conrol-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
         return res.status(200).json({});
     }
});

app.use('/users', userRoutes);
app.use('/articles', articleRoutes);

// Error handling
app.use((req, res, next) => {
    const err = new Error('Not found!');
    err.status = 404;
    next(err);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
