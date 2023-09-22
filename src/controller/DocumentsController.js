const queryDocuments = require ('../database/Models/DocumentsTable');


async function InsertNewPdf (req,res)  {
    user_id = req.session.ident;
    path_pdf = req.body.pdf_path
    const i = await queryDocuments.InsertPdf (user_id,path_pdf)
    console.log(i);
}

module.exports = { InsertNewPdf };
