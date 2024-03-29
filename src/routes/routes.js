const express = require('express');
const routes = express.Router();
const Session = require('../middleware/Session')
const LoginController = require('../controller/LoginController');
const DocumentsController = require('../controller/DocumentsController');
const Multer = require('../middleware/Multer');

//Get Routes

routes.get('/',(req,res) => { console.log('home')});
routes.get('/teste', (req,res) => { console.log(req.session.ident)});
routes.get('/logout',(req,res) => { req.session.destroy() });
routes.get('/return_pdf', DocumentsController.PdfByUser)

//Post Routes

routes.post('/pdfSend', Multer.single('file'), DocumentsController.NewPdf)
routes.post('/create_user', LoginController.CreateUser);
routes.post('/login', Session,  LoginController.LoginUser);
routes.post('/insertNewPdf', DocumentsController.InsertNewPdf);
routes.post('/new-note',DocumentsController.newNote);

module.exports = routes
