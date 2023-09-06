const express = require('express');
const routes = express.Router();
const LoginController = require('../controller/LoginController');


routes.get('/',(req,res) => { console.log('home')});

//post

routes.post('/createLogin', LoginController.InsertUser)


module.exports = routes
