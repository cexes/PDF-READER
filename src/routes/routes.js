const express = require('express');
const routes = express.Router();
const LoginController = require('../controller/LoginController');
const Session = require('../middleware/Session');


//Get Routes

routes.get('/',(req,res) => { console.log('home')});
routes.get('/debug',Session,(req,res) =>{
    console.log(req.session.email)
})

//Post Routes
routes.post('/create_user', LoginController.CreateUser)
routes.post('/login', Session , LoginController.LoginUser)



module.exports = routes
