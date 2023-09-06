const pool = require('./databaseConnection');

async function SelecAlltUser(){
     const select = await pool.query('SELECT * FROM users;');
     console.log(select.rows);
     pool.end();   
}


async function InsertUser(name,email,pass ){
     const insert = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',[name, email, pass]);
     console.log(insert);
     pool.end();
}

async function SelecOneUser(email, password) {
     const selectOne = await pool.query(' SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]); 
     console.log(selectOne.rows);
     pool.end();
}

SelecOneUser('ironman@gmail.com', '123');
