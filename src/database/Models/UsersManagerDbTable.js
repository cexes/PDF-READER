const pool = require('../databaseConnection');

async function SelecAlltUser(){
     const select = await pool.query('SELECT * FROM users;');
     console.log(select.rows);
}


async function InsertUser(name,email,pass ){

     const UserSelect = 'SELECT * FROM users WHERE email = $1'; 
     const querySelectUser = await pool.query(UserSelect,[email]);
      

     if(querySelectUser.rows.length > 0 ) { 
        console.log('User ared cadastred');
     } else {
         const insert = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',[name, email, pass]);
         console.log(insert);
  }
}

async function SelectOneUser(email, password) {
   const selectOne = await pool.query(' SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]); 
   const returnIDandName = await pool.query( 'SELECT id FROM users WHERE  email = $1',[ email]);
   return returnIDandName.rows;
}

module.exports = { InsertUser, SelectOneUser }; 

