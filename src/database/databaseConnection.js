const { Pool } = require('pg');

module.exports = pool = new Pool ({
    database: 'PDF_READER_NEW_HOMOLOG',
    user: 'adm',
    password: 'root'
})
