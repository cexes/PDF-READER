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
  try {

    const user = await userQuery.SelectOneUser(email, password);
    console.log(user);
    
    if (user.length === 0) { 
        return res.json({ 'ERR': 'USUÁRIO NÃO EXISTE' }
    )}
    
     req.session.email = 'teste'
     console.log(req.session.email)
  } catch (error) {
    console.error('Erro:', error);
    return res.status(500).json({ 'ERR': 'Erro interno do servidor' });
  }
}


module.exports = { CreateUser, LoginUser}
