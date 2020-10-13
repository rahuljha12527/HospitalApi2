const passport=require('passport');

const JWTStrategy=require('passport-jwt').Strategy;

const ExtractJWT=require('passport-jwt').ExtractJwt;

const User=require('../models/doctor');

let opts={
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:'hospitalApi'
}

passport.use(new JWTStrategy(opts,function(jwtPayLoad,done){
    console.log(opts,jwtPayLoad)

    User.findById(jwtPayLoad._id,function(err,user){
        if(err){
            console.log('Error in finding the user from JWT');
            return;
        }
        if(user){
            return done(null,user);
        }
        else{
            return done(null,false);
        }
    })
}));

module.exports=passport;

//samjh nh aa rha hai jwt read q nh kr rha hai...jb ki syntax sahi hai contoller sahi hai kya register patient..
//controoler tk abhi nh ja rha  hai...aisa hai na ki aapko dr ki id chhaiye..it means dr authorized hai..isliye authorization check krne ke liye..maine middleware lagaya....agar authorized h toh current dr ki data mil jayegi ..magar jwt kaam hi nh kr rha hai..
// to jwt ke kiya krne parega ...aisa kuchh galat dikh nh rha hai..normal syntax hai..dekta hu.. me