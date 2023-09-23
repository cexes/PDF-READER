const Multer = require('multer');
const path = require('path');
const storage = Multer.diskStorage( { 
   destination: function (req, file, cb) {
       cb(null, path.resolve(__dirname,'../../PdfUserFolder' )) 
   },
    filename: function (req, file, cb) {
         const date = Date.now()
         cb(null, file.originalname + date)

    }
} )

const upload = Multer ( {storage: storage })

module.exports = upload;
