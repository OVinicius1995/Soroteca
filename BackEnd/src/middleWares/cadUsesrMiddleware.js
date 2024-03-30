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

module.exports = {
  validateBody
}