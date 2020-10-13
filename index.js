const express=require('express');
const app=express();
const port=8000;
const passport =require('passport');
const passportJwt=require('passport-jwt')
const passportjwtstrategy=require('./config/passport-jwt-strategy');
const bodyParser=require('body-parser');

const db=require('./config/mongoose');

app.use(passport.initialize());
//middleware for connecting form  data into text
app.use(express.urlencoded());
app.use(bodyParser.json());

app.use('/',require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
})