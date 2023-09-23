const pool = require('../databaseConnection');

async function SelecAll () { 
    const select = await pool.query('SELECT * FROM documents');
};

async function InsertPdf ( user_id, file_path) {
    const insertPDF =  await pool.query ('INSERT INTO documents (user_id, file_path ) VALUES ($1, $2 )', 
    [ user_id, file_path ] );
};

async function InserNote ( user_id, file_path, annotations, page ) {
   const insertNote = await pool.query ('INSERT INTO documents (user_id, file_path , annotations ,page ) VALUES ($1, $2, $3, $4)',
   [user_id, file_path , annotations, page]);
};

async function PdfByUser (user_id) { 
    const  pdfquery = await pool.query (' SELECT file_path FROM documents WHERE user_id = $1 ',[user_id]);
    console.log(pdfquery.rows)
};


module.exports = {InsertPdf, InserNote, PdfByUser}; 
