const queryDocuments = require ('../database/Models/DocumentsTable');


async function InsertNewPdf (req,res)  {
    user_id = req.session.ident;
    path_pdf = req.body.pdf_path;
    const i = await queryDocuments.InsertPdf (user_id,path_pdf)
    console.log(i);
};

async function PdfByUser (req,res) {
    await queryDocuments.PdfByUser(req.session.ident);
};

async function newNote(req,res) {
    await queryDocuments,InserNote(req.session.ident,file_path,notes,page);

};

async function NewPdf (req,res) { 
    pathImage = req.file.originalname; 
    define_path = 'file:///home/cesar_herrique/Projects/PDF-READER-PROJECT/PdfUserFolder/'+pathImage+req.session.ident 
    await queryDocuments.InsertPdf(req.session.ident,define_path);
};

module.exports = { InsertNewPdf, PdfByUser, NewPdf, newNote};
