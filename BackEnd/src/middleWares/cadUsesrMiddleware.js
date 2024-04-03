const conn = require('../models/connection');
const jwt = require('jsonwebtoken');

const validateBody = (req,res,next) =>{
  const {body} = req;

  if(body.Uname === undefined || body.Ucpf === undefined || body.Upaper === undefined
    ||body.Uuf === undefined || body.UconsPro === undefined ||body.Uemail === undefined
    ||body.Upass === undefined){
     return res.status(400).json({message: "Todos os campos são obrigatórios! Verifique."});
    }

    if(body.Uname === "" || body.Ucpf === "" || body.Upaper === ""
      ||body.Uuf === "" || body.UconsPro === "" ||body.Uemail === ""
      ||body.Upass === ""){
       return res.status(400).json({message: "Todos os campos são obrigatórios e não podem ficar em branco! Verifique."});
      }

      next();

};

const validateExists = async (req,res,next) =>{
  const {id} = req.params;


 const [usersids] = await conn.execute('Select id from cadUsers where id=?',[id]);

  if(usersids.length === 0){
    
    return res.status(400).json({message: "Id não encontrado no banco, verifique!"});  
  }

  next();
}

const validaAutorization = (req,res,next) => {

  const tokenTeste = req.headers['authorization'];

  if (!tokenTeste) {
    return res.status(401).json({auth: false, message: 'O token não foi informado, verifique.' });
  }

  if(tokenTeste != process.env.SECRET) {
    return res.status(500).json({auth: false, message: 'O token informado não é válido, verifique.' });
    
  };

  next();

}

module.exports = {
  validateBody,
  validateExists,
  validaAutorization
}