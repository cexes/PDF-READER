const express = require('express');
const routes = express.Router();
const Session = require('../middleware/Session')
const LoginController = require('../controller/LoginController');

//Get Routes

routes.get('/',(req,res) => { console.log('home')});
routes.get('/teste', (req,res) => {
     console.log(req.session.email_user)
} )

//Post Routes
routes.post('/create_user', LoginController.CreateUser)
routes.post('/login', Session,  LoginController.LoginUser)



module.exports = routes
