const Multer = require('multer');
const path = require('path');
const DocController = require('../controller/DocumentsController');
const storage = Multer.diskStorage( { 
   destination: function (req, file, cb) {
       cb(null, path.resolve(__dirname,'../../PdfUserFolder' )) 
   },
    filename: function (req, file, cb) {
         const date = Date.now()
         cb(null, file.originalname + req.session.ident)
         
    }

} )

const upload = Multer ( {storage: storage })

module.exports = upload;
