const express = require('express');
const routes = express.Router();
const LoginController = require('../controller/LoginController');


//Get Routes

routes.get('/',(req,res) => { console.log('home')});

//Post Routes
routes.post('/create_user', LoginController.CreateUser)
routes.post('/login', LoginController.LoginUser)



module.exports = routes
