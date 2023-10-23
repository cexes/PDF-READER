const { Pool } = require('pg');

module.exports = pool = new Pool ({
    database: 'pdf_reader_new_homolog',
    user: 'adm',
    password: 'root'
})
