const userQuery = require('../database/Models/UsersManagerDbTable');
function CreateUser( req,res ) {
  const {name,email,password} = req.body;
  userQuery.InsertUser(name,email,password)
  
  return res.json ( {
      "name": name,
      "email": email,
  })
};


async function LoginUser (req, res) {
  const { email, password } = req.body;
  try { const user = await userQuery.SelectOneUser(email, password);
        
    
      if (user.length === 0) { return res.json({ 'ERR': 'USUÁRIO NÃO EXISTE' } )}
           const userId = user[0].id;
           req.session.ident = userId;
           req.session.save(); 
           return res.json(req.session.ident)    
  } 
    catch (error) {
    console.error('Erro:', error);
    return res.status(500).json({ 'ERR': 'Erro interno do servidor' });
  }
}


module.exports = { CreateUser, LoginUser}
