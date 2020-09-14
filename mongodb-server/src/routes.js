var express = require('express');
    routes = express.Router();
var userController = require('./controller/user-controller');
var passport =require('passport');
const { request } = require('express');

routes.get('/',(req,res)=>{
    return res.send('Hello, this is the mongo db api');
});

routes.post('/register',userController.registerUser);
routes.post('/login',userController.loginUser);

routes.get('/special',passport.authenticate('jwt',{session:false}),(req,res)=>{
    return res.json({'message':`hey ${req.user.email}`});
});
module.exports = routes;
