const mongo=require('mongoose');
var qs = require('querystring');
//var pop=require('popups');
var js=require('js-alert');
expressValidator = require('express-validator');
//connect db
const express = require('express');
const app = express();
mongo.connect('mongodb://test:test111@ds263640.mlab.com:63640/wamuser');

//add table
var schema = new mongo.Schema({
    email: String,
    name: String,
    pass: String
});
var users=mongo.model('User',schema);
/*var item=users({email: 'abdo@yahoo.com',name: 'abdo' , pass: '111'}).save(function(err){
    if(err) throw err;
    console.log('item saved');
});*/
module.exports = function(app){

    app.get('/register',function(req,res){
        res.render('register');
        
    });
    app.post('/register',function(req,res){
        var body="";
        req.on('data',function(data){
            body=body+data;
        });
        req.on('end',function(){
            var user=qs.parse(body);
            
            
            var userEmail=user.email;
            var userName=user.name;
            var userPass=user.password;
            var userPass2=user.passwordConfirm;
            //check data validation 
            //check data in database
            //check email in db
            //console.log(userEmail);
            users.find({userEmail},function(err,data){

                if(err) throw err;
                //console.log(data[0]);
                if(data.length== 0)//Email is not in database check  user name
                {
                       users.find({userName},function(errr,data1){
                           //console.log(data[0]);
                           if(errr) throw errr;
                            if(data1.length== 0){
                                
                                //console.log(data1[0]);
                                var newDb= users({email: userEmail , name: userName , pass: userPass}).save(function(err2,data2){
                                    // console.log(res.json(data2));
                                     if(err2)throw err2;
                                     res.json(data2);
                                 });
                            }//Name is not in database add to database 
                            else{
                                //name is in db
                                
                                JSAlert.alert("This is an alert.");
                            }
                            
                       });
                }
                else{
                    // Email is in db
                    JSAlert.alert("This is an alert.");    
                }
            });
        });
    });
}
    
