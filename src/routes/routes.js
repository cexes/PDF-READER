const express = require('express');
const routes = express.Router();
const Session = require('../middleware/Session')
const LoginController = require('../controller/LoginController');

//Get Routes

routes.get('/',(req,res) => { console.log('home')});
routes.get('/teste', (req,res) => { console.log(req.session.ident)});
routes.get('/logout',(req,res) => { 
    req.session.destroy() 
    res.json('Sessão destruida')
});
//Post Routes
routes.post('/create_user', LoginController.CreateUser)
routes.post('/login', Session,  LoginController.LoginUser)



module.exports = routes
