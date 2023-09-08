const express = require('express');
const routes = express.Router();
const LoginController = require('../controller/LoginController');


routes.get('/',(req,res) => { console.log('home')});

//post

routes.post('/create_user', LoginController.CreateUser)
routes.post('/login', LoginController.LoginUser)



module.exports = routes
