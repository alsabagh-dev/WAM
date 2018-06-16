const express = require('express');
const app = express();
const signupController=require('./controllers/signupController');
//set up  template engine
app.set('view engine' , 'ejs');

//Middleware  for static web page 
app.use(express.static('./public'))

//init controller
signupController(app);






























const signUp=require('./api/routes/SignUp');
//make middleware   not worked for page
app.use('/register' , signUp);
//Error request
app.use((req,res,next)=> {
    const error= new Error('Not found');
    error.status = 404;
    next(error);    
});



//Database error
app.use((error,req,res,next)=> {
    res.status(error.status ||500);
    res.json({
        error:{
            message: error.message
        }
    });        
});
module.exports = app;