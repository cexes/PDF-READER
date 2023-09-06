const User = require('../database/models/UserTable');


module.exports = {
  
  async InsertUser(req,res) {
    const date = new Date(); 
    
    try {
      const { name, email, pass } = req.body;
      const user = await User.create({
        name: name,
        email: email,
        pass: pass,
  
      });
      
      return res.json(user); 
    } catch (err) {
      console.error(err); 
      return res.status(500).json({ error: 'Erro ao inserir usuário' });
    }
  },


   async FindUser(req, res) {

     const query = await User.findAll({ attributes:['id','email','name','pass'],  where:{email: req.body.email,pass:req.body.pass } });

    if(query.length === 0) {
       return res.status(400).json({
           erro:true,
           mensage: "USER NOT FOUND"
       });
    } return res.json({ success: true });
 },
};
