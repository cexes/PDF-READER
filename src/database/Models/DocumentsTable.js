const pool = require('../databaseConnection');

async function SelecAll () { 
    const select = await pool.query('SELECT * FROM documents');
    console.log(select.rows);
};

async function InsertPdf ( user_id, file_path) {
    const insertPDF =  await pool.query ('INSERT INTO documents (user_id, file_path ) VALUES ($1, $2 )', 
    [ user_id, file_path ] );
    console.log(insertPDF);
};

async function InserNote ( user_id, file_path, annotations, page ) {
   const insertNote = await pool.query ('INSERT INTO documents (user_id, file_path , annotations ,page ) VALUES ($1, $2, $3, $4)',
   [user_id, file_path , annotations, page]);
   console.log(insertNote);
}

SelecAll();
module.exports = {InsertPdf, InserNote }; 
